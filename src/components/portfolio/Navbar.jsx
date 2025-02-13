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
      <header className="header-section">
        <div className="container">
          <nav>
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
                <NavLink to="/blogs">Blog</NavLink>
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
        </div>
      </header>
    )
  );
  // return (
  //   <div className="d-flex flex-column flex-md-row align-items-center p-2 border-bottom m-0">
  //     <Link
  //       to="/"
  //       className="d-flex align-items-center link-body-emphasis text-decoration-none "
  //     >
  //       Portfolio
  //     </Link>

  //     <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
  //       <Link
  //         className="me-4 py-2 link-body-emphasis text-decoration-none"
  //         to={"/"}
  //       >
  //         Home
  //       </Link>
  //       <Link
  //         className="me-4 py-2 link-body-emphasis text-decoration-none"
  //         to={"/about"}
  //       >
  //         About
  //       </Link>
  //       <Link
  //         className="me-4 py-2 link-body-emphasis text-decoration-none"
  //         to={"/portfolio"}
  //       >
  //         Portfolio
  //       </Link>
  //       <Link
  //         className="me-4 py-2 link-body-emphasis text-decoration-none"
  //         to={"/skills"}
  //       >
  //         Skills
  //       </Link>
  //       <Link
  //         className="me-4 py-2 link-body-emphasis text-decoration-none"
  //         to={"/blogs"}
  //       >
  //         Blog
  //       </Link>
  //       <Link
  //         className="me-5 py-2 link-body-emphasis text-decoration-none"
  //         to={"/contact"}
  //       >
  //         Contact
  //       </Link>
  //       <Link
  //         className="py-2 link-body-emphasis text-decoration-none"
  //         to={"/login"}
  //       >
  //         Admin
  //       </Link>
  //     </nav>
  //   </div>
  // );
}

export default Navbar;
