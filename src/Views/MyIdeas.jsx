import React, { useState} from "react";
import "./aboutMe.css"

export const MyIdeas = () =>{
  const [view, setView] = useState ("4Geeks Academy")

  return (
    <div className="App">
      <aside>
          <ul>
            <li> <button onClick={() =>setView("4Geeks Academy")}><p>4Geeks Academy</p></button></li>
            <li> <button onClick={() =>setView("DavPad S.L")}><p>DavPad S.L</p></button></li>
          </ul>
      </aside>
      <div className="about-me">
        {view ==="4Geeks Academy" && (<div>
            <div className="header">
              <div><h1>Full Stack Dev - Teacher Assistant</h1></div>
              <div><h1><i className="unbold"> 08/2024 - Actualidad (Remoto)</i></h1></div>
            </div>
            <b className="tasks">Tareas realizadas</b>
            <ul>
              <li>Mentorías en <b>React.js y Python</b>  con <b>Flask</b> , brindando soporte a estudiantes en su aprendizaje.</li>
              <li>Corrección y revisión de código, proporcionando sugerencias de mejora a los alumnos.</li>
              <li>Desarrollo de proyectos utilizando <b>Flask y SQLAlchemy</b>  para la gestión de bases de datos.</li>
              <li>Creación de endpoints con <b>Flask</b>, para conectar front y back.</li>
              <li>Uso de tecnologías web como <b>HTML5, CSS3, Bootstrap y JavaScript</b></li>
              <li>Gestión de control de versiones con <b>Git y GitHub</b></li>
            </ul>
          </div>)}
          {view ==="DavPad S.L" && (<div>
            <div className="header">
              <div><h1>Full Stack Developer</h1></div>
              <div><h1><i className="unbold"> 01/2024 - Actualidad (Remoto)</i></h1></div>
            </div>
            <b className="tasks">Tareas realizadas</b>
            <ul>
              <li>Mentorías en con Flask, brindando soporte a estudiantes en su aprendizaje.</li>
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