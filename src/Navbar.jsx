import React from "react";
import './navbar.css';

import { Link } from "react-router-dom";

export const Navbar = () =>{

    return (
        <nav>
            <div className="nav-div">            
                <div className="left">
                    <Link to="/" className="btn-text">Home</Link>
                </div>
                <div className="right-div">
                    <div className="btn">
                        <Link to="/projects" className="btn-text">My projects</Link>
                    </div>
                    <div>
                        <Link to="/myideas" className="btn-text">My ideas</Link>
                    </div>
                    <div>
                        <Link to="/aboutme" className="btn-text">About me</Link>
                    </div>
                </div>
            </div>

        </nav>
    );
  }