import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import {Home} from './Views/Home.jsx';
import {MyIdeas} from './Views/MyIdeas.jsx';
import {AboutMe} from './Views/AboutMe.jsx';
import {Projects} from './Views/Projects.jsx';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { Navbar } from './Navbar.jsx';
import { Footer } from './Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<MyIdeas />} path="/myideas" />
        <Route element={<AboutMe />} path="/aboutme" />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
