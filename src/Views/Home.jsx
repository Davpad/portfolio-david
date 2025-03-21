import React from "react";
import "./home.css"
import Yo from "../img/1735833010091.jpg"

export const Home = () =>{

  return (
    <div className="App">
      <div className="home-body">
        <img src={Yo} alt="David" title="David"/>
        <div>
          <h1>¡¡Bienvenidos a mi Portfolio!!</h1>
          <p>Soy David Padilla, un Full Stack Developer apasionado por la docencia y la naturaleza </p>
        </div>
      </div>
    </div>
  );
}


