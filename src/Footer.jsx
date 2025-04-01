import React from "react";
import './footer.css';

import { Link } from "react-router-dom";

export const Footer = () =>{

    return (
        <footer>
            <div className="footer-content">
               <div className="footer-link"><Link to="https://github.com/Davpad" className="btn-text"><i className="fa-brands fa-github"></i></Link></div>
               <div className="footer-link"><Link to="https://www.linkedin.com/in/david-padilla-vill%C3%A9n/" className="btn-text"><i className="fa-brands fa-linkedin"></i></Link></div>
            </div>
        </footer>
    );
  }