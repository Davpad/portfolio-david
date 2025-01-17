import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './Home';
import MyIdeas from './Views/MyIdeas';
import AboutMe from './Views/AboutMe';
import Projects from './Views/Projects';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<MyIdeas />} path="/myideas" />
        <Route element={<AboutMe />} path="/aboutme" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
