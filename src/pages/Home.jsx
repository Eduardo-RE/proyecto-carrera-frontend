import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../Home.css";
import User from "./user/User";
const Home = ({ children }) => {
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
          <User />
        </div>
      </div>
    </>
  );
};

export default Home;
