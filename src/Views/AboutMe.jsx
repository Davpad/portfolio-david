import React, { useState } from "react";
import "./aboutMe.css"

export const AboutMe = () =>{
  const [view, setView] = useState ("")
  
  return (
    <div className="App">
      <aside>
          <ul>
            <li onClick={setView("Titles")}><p>Mis títulos</p></li>
            <li onClick={setView("Courses")}><p>Mis cursos</p></li>
          </ul>
      </aside>
    </div>
  );
}
