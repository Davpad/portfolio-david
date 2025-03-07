import React from "react";
import './navbar.css';

import { Link } from "react-router-dom";

export const Navbar = () =>{

    return (
        <nav>
            <div className="nav-div">            
                <div className="left">
                    <Link to="/">Home</Link>
                </div>
                <div className="right-div">
                    <div>
                        <Link to="/projects">My projects</Link>
                    </div>
                    <div>
                        <Link to="/myideas">My ideas</Link>
                    </div>
                    <div>
                        <Link to="/aboutme">About me</Link>
                    </div>
                </div>
            </div>

        </nav>
    );
  }