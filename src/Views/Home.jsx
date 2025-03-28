import React, {useState} from "react";
import "./home.css"
import Yo from "../img/1735833010091.jpg"

export const Home = () => {

  const [view, setView] = useState ("")

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
            <button className="button" onClick={()=>setView("show")}><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
      <div className="home-body">
        {view==="show"&&(<p>Veo que estás interesado en mi Portfolio. ¡Es altamente interactivo!.
           En el navbar de arriba podrás localizar más información sobre mis proyectos y mi experiencia. 
           El apartado sobre mi contiene información sobre mis títulos y cursos, 
           las tecnologías que utilizo y las hablidades que he ido adquiriendo a lo largo de mi camino
            como desarrollador. Algunos apartados son altamente interactivos y contienen botones que 
            nos dirigen a videos de presentación, al repositorio de Github o a la propia página web. 
            ¡Seguid los botones verdes!</p>)}
      </div>
    </div>
  );
}


