import { NavLink } from "react-router-dom";
import "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

function Navbar() {
  const [isAuth, setIsAuth] = useState(null); // ✅ null orqali boshlaymiz

  useEffect(() => {
    const auth = getAuth();

    // Auth state'ni tekshirish
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // ⏳ Agar `isAuth` null bo‘lsa, kutish uchun loader yoki hech narsa qaytaramiz
  if (isAuth === null) {
    return <div>Loading...</div>; // ❗ Sahifa almashishini oldini olish
  }

  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";

    setTimeout(() => {
      sidebar.classList.add("show"); // .show sinfini qo'shib transform o'tishini faollashtirish
    }, 10); // 10ms kechikish bilan transform o'tishini boshlash
  }

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  }

  return (
    !isAuth && (
      <nav className="w-100 container m-auto">
        <ul className="sidebar">
          <li className="first-item" onClick={hideSidebar}>
            <button className="btn btn-danger">
              <i className="bi bi-x-lg"></i>
            </button>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Admin</NavLink>
          </li>
        </ul>
        <ul>
          <li className="first-item">
            <NavLink to="/">
              <span>Javohir</span>
            </NavLink>
          </li>
          <li className="hideOnMobile">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hideOnMobile">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hideOnMobile">
            <NavLink to="/portfolio">Projects</NavLink>
          </li>
          <li className="hideOnMobile">
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li className="hideOnMobile">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hideOnMobile">
            <NavLink to="/login">Admin</NavLink>
          </li>
          <li className="menu menu-button" onClick={showSidebar}>
            <button className="btn btn-success">
              <i className="bi bi-list"></i>
            </button>
          </li>
        </ul>
      </nav>
    )
  );
}

export default Navbar;
