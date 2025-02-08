import React from "react";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const navigate = useNavigate();
  const hundleLogin = (e) => {
    e.preventDefault();
    navigate("/admin");
  };
  return (
    <main
      className="form-signin m-auto d-flex justify-content-center align-items-center"
      style={{ height: "82vh", width: "20%" }}
    >
      <form className="w-100">
        <h1 className="h3 mb-3 fw-normal">Please login in</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control "
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          onClick={(e) => {
            hundleLogin(e);
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default AdminLogin;
