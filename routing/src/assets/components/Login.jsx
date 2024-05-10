import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/home");
  };
  return (
    <div className="container text-center">
      <h1>login</h1>
      <input
        type="text"
        className="form-control mb-2 "
        placeholder="username"
      />
      <input
        type="text"
        className="form-control mb-2 "
        placeholder="password"
      />
      <button className="btn btn-primary" onClick={loginHandler}>
        login
      </button>
    </div>
  );
}

export default Login;
