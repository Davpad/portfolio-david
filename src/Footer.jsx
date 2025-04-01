import React from "react";
import './footer.css';

import { Link } from "react-router-dom";

export const Footer = () =>{

    return (
        <footer>
            <div>
               <Link to="https://github.com/Davpad"><i className="fa-brands fa-github"></i></Link>
               <Link to="https://www.linkedin.com/in/david-padilla-vill%C3%A9n/"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
        </footer>
    );
  }