import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../Home.css";

const Formularios = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <div className="one">
          <Header />
        </div>

        <div className="two">
          <Navbar />
        </div>
        <div className="three">
          {children}
          <div className="blockformularios">
            <div className="cuadroselect">
              <select name="cars" id="cars">
                <option>Seleccione Carrera</option>
                <option value="saab">Sistemas</option>
                <option value="opel">Industrial</option>
                <option value="audi">Gestion</option>
              </select>
            </div>
            <div className="formularioscuadro2">
              <div className="formsinputs">
                <input
                  style={{ width: 590, height: 52 }}
                  type="Text"
                  placeholder="Pregunta"
                />

                <div>
                  <input type="Text" placeholder="Respuesta 1" />
                  <input type="Text" placeholder="Respuesta 2" />
                </div>

                <div>
                  <input type="Text" placeholder="Respuesta 3" />
                  <input type="Text" placeholder="Respuesta 4" />
                </div>
              </div>
              <div className="buttonsforms">
                <button className="btnFormsBlue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-pencil"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                    <path d="M13.5 6.5l4 4" />
                  </svg>
                </button>
                <button className="btnFormsOrange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-edit"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                    <path d="M16 5l3 3" />
                  </svg>
                </button>
                <button className="btnFormsRed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-trash"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 7l16 0" />
                    <path d="M10 11l0 6" />
                    <path d="M14 11l0 6" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formularios;
