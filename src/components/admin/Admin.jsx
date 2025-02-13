import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function Admin() {
  return (
    <>
      <header>
        <AdminNavbar />
      </header>
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default Admin;
