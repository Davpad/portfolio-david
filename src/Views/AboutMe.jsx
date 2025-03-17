import React, { useState} from "react";
import "./aboutMe.css"

export const AboutMe = () =>{
  const [view, setView] = useState ("")
  
  return (
    <div className="App">
      <aside>
          <ul>
            <li> <button onClick={() =>setView("Titles")}><p>Mis títulos</p></button></li>
            <li> <button onClick={() =>setView("Courses")}><p>Mis cursos</p></button></li>
            <li> <button onClick={() =>setView("Technologies")}><p>Mis tecnologías</p></button></li>
            <li> <button onClick={() =>setView("Habilities")}><p>Mis habilidades</p></button></li>
          </ul>
      </aside>
      <div className="about-me">
        {view ==="Titles" && (<div>
            <h1 className="header">Mis títulos</h1>
            <ul>
              <li>Full Stack Developer. (01/2024 - 06/2024) <i>4Geeks Academy</i></li>
              <li>Máster de Educación y TIC. (10/2021 - 06/2023) <i>Universidad Antonio Nebrija</i></li>
              <li>Máster en Profesorado. (10/2019 - 09/2020) <i>Universidad de Santiago de Compostela</i></li>
              <li>Licenciado en Ingeniería de Montes. (10/2007 - 09/2015) <i>Universidad de Córdoba</i></li>
            </ul>
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
