import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../Home.css";

const Registerforms = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="wrapper">
        <div className="one">
          <Header />
        </div>

        <div className="two">
          <Navbar />
        </div>
        <div className="three">
          {children}
          <div className="block">
            <div className="inputsgrp1">
              <input type="Text" placeholder="Nombre" />
              <input type="Text" placeholder="Carrera" />
              <input type="number" placeholder="Semestre" min={1} max={16} />
              <input type="tel" placeholder="Telefono" />
              <input
                style={{ width: 530 }}
                type="Text"
                placeholder="Domicilio"
              />
              <input
                style={{ height: 67, width: 530 }}
                type="Text"
                placeholder="Clave de la carrera a la que desea el cambio"
              />
              <input type="email" placeholder="Correo Electronico" />
            </div>
            <div className="inputsgrp2">
              <input type="Text" placeholder="Alumno regular" />
              <input type="date" />
            </div>
          </div>
          <div className="buttons">
            <button class="btn">
              <div className="options">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-files"
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
                  <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                  <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                </svg>
              </div>{" "}
              Guardar
            </button>
            <button class="btn">
              <div className="options">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-trash-x"
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
                  <path d="M4 7h16" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  <path d="M10 12l4 4m0 -4l-4 4" />
                </svg>
              </div>{" "}
              Borrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerforms;
