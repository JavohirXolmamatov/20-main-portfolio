import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <main
        className="container pt-3 d-flex justify-content-center align-items-center w-100"
        style={{ height: "84.3vh" }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default Admin;
