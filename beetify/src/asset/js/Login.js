import React from "react";
import "../css/Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://image.freepik.com/free-vector/bee-logo-yellow_20065-150.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO BEETIFY</a>
    </div>
  );
}

export default Login;
