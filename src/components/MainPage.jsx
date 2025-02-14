import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";

function MainPage() {
  return (
    <div className="" style={{ userSelect: "none" }}>
      <header
        className="header-section d-flex fixed-top"
        style={{ marginBottom: "auto", height: "80px" }}
      >
        <Navbar />
      </header>
      <main
        className="d-flex justify-content-center"
        style={{ position: "absolute", top: "80px" }}
      >
        <Outlet />
      </main>
      <footer
        className="bg-dark text-white d-flex justify-content-center"
        style={{ marginTop: "auto" }}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
