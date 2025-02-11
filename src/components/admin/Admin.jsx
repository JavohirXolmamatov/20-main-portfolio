import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <main className="container" style={{}}>
        <Outlet />
      </main>
    </>
  );
}

export default Admin;
