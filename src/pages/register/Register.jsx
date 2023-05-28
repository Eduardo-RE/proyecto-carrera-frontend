import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-title">Crear cuenta</div>
        <input
          className="register-input"
          type="text"
          placeholder="¿Cuál es su dirección email?"
        />
        <input
          className="register-input"
          type="text"
          placeholder="Verifica tu email"
        />
        <input
          className="register-input"
          type="password"
          placeholder="Contraseña"
        />
        <div className="checkmark-container">
          <input className="checkbox" type="checkbox" />
          <span className="checkmark"></span>
          <label className="checkmark-label">
            Doy mi consentimiento y acepto recibir información sobre los
            servicios y novedades.{" "}
            <a href="*" className="privacy-color">
              Saber más.
            </a>
          </label>
        </div>
        <button className="register-button">Registrarme</button>
        <p className="conditions">
          Al crear la cuenta de usuario aceptas los{" "}
          <a href="*" className="privacy-color">
            términos y condiciones
          </a>{" "}
          del servicio. , y reconoces que has leído nuestra{" "}
          <a href="*" className="privacy-color">
            política de privacidad
          </a>
        </p>
        <div className="line"></div>
        <Link to="/">
          <button className="login-route">Acceder a tu cuenta</button>
        </Link>
      </div>
    </>
  );
};

export default Register;
