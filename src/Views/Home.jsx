import React from "react";
import "./home.css"
import Yo from "../img/1735833010091.jpg"

export const Home = () => {

  return (
    <div className="App">
      <div className="home-body">
        <img src={Yo} alt="David" title="David" />
        <div>
          <h1>¡¡Bienvenidos a mi Portfolio!!</h1>
          <p>Soy David Padilla, un Full Stack Developer apasionado por la docencia y la naturaleza.
             Mis conocimientos de ingeniería me permiten entender la lógica que hay detrás de 
             las diferentes dinámicas en una página web y el flujo de información que se genera 
             entre backend y frontend. Además mi inteligencia especial me permite desarrollar 
             layouts originales y aportar soluciones únicas. Mi experiencia como docente me permite 
             localizar fácilmente los problemas en el código y aportar soluciones innovadoras y creativas. </p>
          <div className="button-line">
            <button className="button"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
}


