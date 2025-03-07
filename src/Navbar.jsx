import React from "react";
import './navbar.css';

import { Link } from "react-router-dom";

export const Navbar = () =>{

    return (
        <nav>
            <div className="nav-div">            
                <div className="left">
                    <Link to="/" className="btn">Home</Link>
                </div>
                <div className="right-div">
                    <div>
                        <Link to="/projects" className="btn">My projects</Link>
                    </div>
                    <div>
                        <Link to="/myideas" className="btn">My ideas</Link>
                    </div>
                    <div>
                        <Link to="/aboutme" className="btn">About me</Link>
                    </div>
                </div>
            </div>

        </nav>
    );
  }