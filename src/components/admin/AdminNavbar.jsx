import { Link, useNavigate } from "react-router-dom";
import "../../firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";

function AdminNavbar() {
  const navigate = useNavigate();
  const logOutHandle = () => {
    signOut(getAuth())
      .then(() => {
        console.log("logout user");
        navigate("/");
      })
      .catch((e) => {
        console.log(e.error);
      });

    console.log("hello");
  };
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-2 border-bottom m-0-auto container">
      <Link
        to="/admin"
        className="d-flex align-items-center link-body-emphasis text-decoration-none "
      >
        Portfolio
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link
          className="me-4 py-2 link-body-emphasis text-decoration-none"
          to={"/admin"}
        >
          Home
        </Link>
        <Link
          className="me-4 py-2 link-body-emphasis text-decoration-none"
          to={"/admin/blogs"}
        >
          Blog service
        </Link>
        <Link
          className="me-4 py-2 link-body-emphasis text-decoration-none"
          to={"/admin/projects"}
        >
          Projects
        </Link>
        <Link
          className="me-5 py-2 link-body-emphasis text-decoration-none"
          to={"/admin/contact"}
        >
          Contact service
        </Link>
        <button
          className="p-2 m-0 btn btn-danger"
          onClick={(e) => logOutHandle()}
        >
          Chiqish
        </button>
      </nav>
    </div>
  );
}

export default AdminNavbar;
