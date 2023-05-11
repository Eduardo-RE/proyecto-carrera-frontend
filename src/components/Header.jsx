import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <button className="logout-button">
          <div className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-power"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 6a7.75 7.75 0 1 0 10 0" />
              <path d="M12 4l0 8" />
            </svg>
          </div>
          Cerrar Sesion
        </button>
      </div>
    </>
  );
};

export default Header;
