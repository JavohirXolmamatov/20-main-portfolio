import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-2 border-bottom m-0">
      <Link
        to="/"
        className="d-flex align-items-center link-body-emphasis text-decoration-none"
      >
        Portfolio
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to={"/portfolio"}
        >
          Portfolio
        </Link>
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to={"/skills"}
        >
          Skills
        </Link>
        <Link
          className="me-3 py-2 link-body-emphasis text-decoration-none"
          to={"/blogs"}
        >
          Blog
        </Link>
        <Link
          className="py-2 link-body-emphasis text-decoration-none"
          to={"/contact"}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
