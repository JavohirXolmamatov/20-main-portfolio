import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-2 border-bottom m-0">
      <Link
        to="/"
        className="d-flex align-items-center link-body-emphasis text-decoration-none "
      >
        Portfolio
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link
          className="me-4 py-2 link-body-emphasis text-decoration-none"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="me-4 py-2 link-body-emphasis text-decoration-none"
          to={"/blogs"}
        >
          Blog
        </Link>
        <Link
          className="me-5 py-2 link-body-emphasis text-decoration-none"
          to={"/contact"}
        >
          Contact
        </Link>
        <Link className="py-2 link-body-emphasis text-decoration-none" to={"/"}>
          Chiqish
        </Link>
      </nav>
    </div>
  );
}

export default AdminNavbar;
