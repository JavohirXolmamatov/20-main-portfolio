import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  return (
    <>
      <header
        className="header-section d-flex fixed-top w-100"
        style={{ marginBottom: "auto", height: "60px" }}
      >
        <AdminNavbar />
      </header>
      <main
        className="d-flex justify-content-center w-100 align-items-center"
        style={{
          position: "absolute",
          top: "60px",
          bottom: "60px",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}

export default Admin;
