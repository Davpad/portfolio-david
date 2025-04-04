import React, {useState} from "react";
import "./aboutMe.css"
import "./projects.css"


export const Projects = () =>{
  const [view, setView] = useState ("En tu barrio")

  return (
    <div className="App">
      <aside>
          <ul>
            <li> <button onClick={() =>setView("En tu barrio")}><p>En tu barrio</p></button></li>
          </ul>
      </aside>
      <div className="about-me">
        {view ==="En tu barrio" && (<div>
            <div className="header">
              <h1>En tu barrio</h1>
              <div className="tools-line">
                <i class="fa-brands fa-html5 tool-icon"></i>
                <i class="fa-brands fa-css3-alt tool-icon"></i>
                <i class="fa-brands fa-js tool-icon"></i>
                <i class="fa-brands fa-bootstrap tool-icon"></i>
                <i class="fa-brands fa-react tool-icon"></i>
                <i class="fa-brands fa-python tool-icon"></i>
              </div>
            </div>
            
            <div className="image-array">
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1742556704/Entubarrio_zpnut0.png" alt="imagen1" />
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1742556680/Entubarrio3_k7drqt.png" alt="Imagen2" />
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1742556680/Entubarrio1_jav3cx.png" alt="Imagen3" />
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1742556680/Entubarrio2_incaxr.png" alt="Imagen3" />
            </div>
            <div className="button-line">
              <a href="https://youtu.be/SrZRXFhTtzs" className="button"><i className="fa-solid fa-video"></i></a>
              <a href="https://github.com/Davpad/proyecto-final-entubarrio" className="button"><i className="fa-brands fa-github"></i></a>
            </div>


          </div>)}
        {view ==="Courses" && (<div>
            <h1 className="header">Mis cursos</h1>
            <ul>
              <li>Metodología de gestión y desarrollo de proyectos de software con scrum. (10/2024 - 11/2024) <i> Prosergen</i></li>
              <li>IT Training (11/2024 - 12/2024) <i> Igrowker</i></li>
              <li>Máster en Profesorado (10/2019 - 09/2020) <i> Universidad de Santiago de Compostela</i></li>
              <li>Licenciado en Ingeniería de Montes (10/2007 - 09/2015) <i> Universidad de Córdoba</i></li>
            </ul>
          </div>)}
          {view ==="Technologies" && (<div>
            <h1 className="header">Mis tecnologías</h1>
            <h3 className="header">Front-end</h3>
            <ul className="inline">
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
            </ul><br></br>
            <h3 className="header">Back-end</h3>
            <ul className="inline">
              <li>Python</li>
              <li>Flask</li>
              <li>APIs</li>
              <li>Nest.js</li>
            </ul><br></br>
            <h3 className="header">Bases de datos</h3>
            <ul className="inline">
              <li>My-SQL</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul><br></br>
            <h3 className="header">Control de versiones</h3>
            <ul className="inline">
              <li>GIT</li>
              <li>GitHub</li>
            </ul>
          </div>)}
          {view ==="Habilities" && (<div>
            <h1 className="header">Mis habilidades</h1>
            <ul>
              <li>Modelado de páginas dinámicas utilizando <b>HTML, CSS, Bootstrap y Tailwind</b></li>
              <li>Implementación de funcionalidades utilizando <b>React y Redux</b></li>
              <li>Diseño de bases de datos utilizando <b>SQL Alchemy </b></li>
              <li>Formulación de lógicas intuitivas usando  <b>JavaScript y TypeScript</b></li>
              <li>Construcción de rutas de Backend mediante  <b>Python y Flask</b></li>
              <li>Autenticación a través de <b>JWT</b></li>
              <li>Control de versiones y aprobación de PR mediante <b>Git y GitHub</b></li>
              <li>Testeo de API REST mediante <b>Postman y ThunderClient</b></li>
              <li>Uso de APIs externas para añadir funcionalidades a las aplicaciones</li>

            </ul>
          </div>)}
      </div>
    </div>
  );
}