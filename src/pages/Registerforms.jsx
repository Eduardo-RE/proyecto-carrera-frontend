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
              <i class="fa fa-folder"></i> Guardar
            </button>
            <button class="btn">
              <i class="fa fa-trash"></i> Borrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerforms;
