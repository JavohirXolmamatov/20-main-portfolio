import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";

function MainPage() {
  return (
    <div className="" style={{ userSelect: "none" }}>
      <header className="">
        <Navbar />
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="bg-dark text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
