import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () =>{

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/projects">My projects</Link>
            <Link to="/myideas">My ideas</Link>
            <Link to="/aboutme">About me</Link>
        </nav>
    );
  }