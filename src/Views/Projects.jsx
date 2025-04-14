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
            <li> <button onClick={() =>setView("Pawsome")}><p>Pawsome</p></button></li>

          </ul>
      </aside>
      <div className="about-me">
        {view ==="En tu barrio" && (<div>
            <div className="header">
              <h1>En tu barrio</h1>
              <div className="tools-line">
                <i className="fa-brands fa-html5 tool-icon"></i>
                <i className="fa-brands fa-css3-alt tool-icon"></i>
                <i className="fa-brands fa-js tool-icon"></i>
                <i className="fa-brands fa-bootstrap tool-icon"></i>
                <i className="fa-brands fa-react tool-icon"></i>
                <i className="fa-brands fa-python tool-icon"></i>
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
            <div className="project-text">
              <p>Este proyecto se centra en la idea de crear un e-commerce para comercios de barrio. 
                Los vendedores por un lado son capaces de crear sus tiendas y añadir sus productos. 
                Mientras que los compradores o usuarios pueden buscar información de productos que 
                les interesen, contrastar precios o seleccionar tiendas especializadas en la zona. 
                Se ha utilizado <b>Flask</b> y <b>Python</b> para el diseño del backend, y <b>JavaScript</b> aplicado a <b>React</b>
                 para el frontend, junto con <b>Bootstrap</b> para el diseño. Se trata de un proyecto colaborativo
                 en el que tuve que desarrollar diferentes habilidades junto a un equipo de 4 personas.</p>
            </div>


          </div>)}
          {view ==="Pawsome" && (<div>
            <div className="header">
              <h1>Pawsome</h1>
              <div className="tools-line">
                <i className="fa-brands fa-html5 tool-icon"></i>
                <i className="fa-brands fa-css3-alt tool-icon"></i>
                <i className="fa-brands fa-react tool-icon"></i>
              </div>
            </div>
            
            <div className="image-array">
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1744368884/WhatsApp_Image_2025-04-11_at_10.41.01_zb2kdu.jpg" alt="imagen1" />
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1744368954/WhatsApp_Image_2025-04-11_at_12.37.10_tkbbqg.jpg" alt="Imagen2" />
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1744368914/WhatsApp_Image_2025-04-11_at_10.50.08_jrkvyv.jpg" alt="Imagen3" />
              <img src="https://res.cloudinary.com/dwybb4syq/image/upload/v1744368939/WhatsApp_Image_2025-04-11_at_12.33.44_1_ikcywx.jpg" alt="Imagen4" />
            </div>
            <div className="button-line">
              <a href="https://youtube.com/shorts/0gUeS3i0ihE" className="button"><i className="fa-solid fa-video"></i></a>
              <a href="https://github.com/Davpad/i004-pawsome-front" className="button"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className="project-text">
              <p>Este proyecto trata de crear una página web para la gestión de protectoras 
                de animales. Permite añadir los diferentes animales, ayudas monetarias y en 
                especie, gestión de voluntarios y de adopciones. Además el resto de usuarios 
                son capaces de filtrar los animales por especie o por las diferentes protectoras. 
                Se trata de un proyecto colaborativo con un equipo multidisciplinar de más de 
                15 personas. Yo formé parte del equipo de frontend, donde estuvimos trabajando 
                con <b>TypeScript</b> aplicado a <b>React</b>, utilizando <b>Redux</b> para la
                 gestión del contexto y <b>Tailwind</b> para el modelado.</p>
            </div>

          </div>)}
      </div>
    </div>
  );
}