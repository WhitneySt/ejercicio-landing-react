import React from "react";
import Header from "../header/header.jsx";
import Main from "../main/main.jsx";
import './home.scss';

//Crear un componente
const Home = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
