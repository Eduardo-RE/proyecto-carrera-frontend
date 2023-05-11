import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-title">Accede a tu cuenta</div>
        <input
          className="login-input"
          type="text"
          placeholder="Correo electronico"
        />
        <input
          className="login-input"
          type="password"
          placeholder="Contraseña"
        />
        <Link to="/user">
          <button className="login-button">Iniciar sesion</button>
        </Link>
        <button className="forgot-button">He olvidado mi contraseña</button>
        <div className="line"></div>
        <div className="register-route-container">
          ¿Todavia sin cuenta?
          <Link to="/register">
            <button className="register-route">Quiero registrarme</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
