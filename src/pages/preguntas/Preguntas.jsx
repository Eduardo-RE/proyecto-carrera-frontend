import React from "react";
import { Link } from "react-router-dom";
import "./Preguntas.css";

const Preguntas = () => {
  return (
    <>
      <div className="header-container">
        <Link to="/formularios" style={{ marginLeft: "87%" }}>
          <button
            style={{
              width: "225px",
              height: "49px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#4b3160",
              border: "1px solid #fff",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <div className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-back-up"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#fff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 14l-4 -4l4 -4" />
                <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
              </svg>
            </div>
            Regresar al menu
          </button>
        </Link>
      </div>
      <div className="preguntasContainer">
        <div className="pregunta">¿Con que te identificas?</div>
      </div>
      <div className="respuestasContainer">
        <button className="respuesta">Furro</button>
        <button className="respuesta">Yaoi</button>
        <button className="respuesta">Harem</button>
        <button className="respuesta">Tilin</button>
      </div>
    </>
  );
};

export default Preguntas;
