import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components/index";

function MainPage() {
  return (
    <div
      className="d-flex flex-column h-100 w-100"
      style={{ userSelect: "none" }}
    >
      <header
        className="header-section d-flex fixed-top w-100"
        style={{ marginBottom: "auto", height: "60px" }}
      >
        <Navbar />
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
      <footer
        className="bg-dark text-white d-flex justify-content-center fixed-bottom w-100"
        style={{ marginTop: "auto", height: "60px" }}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default MainPage;
