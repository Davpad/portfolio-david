import React from "react";
import './navbar.css';

import { Link } from "react-router-dom";

export const Navbar = () =>{

    return (
        <nav>
            <div className="nav-div">            
                <div className="left">
                    <Link to="/" className="btn-text">David Padilla</Link>
                </div>
                <div className="right-div">
                    <div className="btn">
                        <Link to="/projects" className="btn-text">Mis proyectos</Link>
                    </div>
                    <div>
                        <Link to="/myideas" className="btn-text">Mi experiencia</Link>
                    </div>
                    <div>
                        <Link to="/aboutme" className="btn-text">Sobre mi</Link>
                    </div>
                </div>
            </div>

        </nav>
    );
  }