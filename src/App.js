import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/Home";
import Registerforms from "./pages/Registerforms";
import Reportes from "./pages/Reportes";
import Formularios from "./pages/Formularios";
import Preguntas from "./pages/preguntas/Preguntas";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<Home />} />
        <Route path="/registerforms" element={<Registerforms />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/preguntas" element={<Preguntas />} />
      </Routes>
    </>
  );
};

export default App;
