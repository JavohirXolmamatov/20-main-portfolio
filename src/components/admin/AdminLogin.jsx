import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../Loader";
function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault(); // Forma submit bo‘lishini oldini olish
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/admin"); // Faqat login muvaffaqiyatli bo‘lsa, admin sahifasiga o'tish
      setIsLoading(false);
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };
  return isLoading ? (
    <Loader />
  ) : (
    <main
      className="form-signin m-auto d-flex justify-content-center align-items-center w-100"
      style={{ height: "92.2vh" }}
    >
      <form className="w-20">
        <h1 className="h3 mb-3 fw-normal">Please login in</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control m-1"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control "
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button
          className="btn btn-primary w-100 py-2"
          type="submit"
          onClick={(e) => {
            userLogin(e);
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default AdminLogin;
