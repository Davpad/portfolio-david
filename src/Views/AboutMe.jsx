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
          </ul>
      </aside>
      <div className="about-me">
        {view ==="Titles" && (<ul><li>Estos son mis títulos</li></ul>)}
        {view ==="Courses" && (<ul><li>Estos son mis cursos</li></ul>)}
      </div>
    </div>
  );
}
