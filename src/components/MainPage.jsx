import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";

function MainPage() {
  return (
    <div className="">
      <header className="container">
        <Navbar />
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
