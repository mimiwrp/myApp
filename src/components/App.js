import React from 'react';
import './style.css';
// import Button from '@mui/material/Button';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import IconMood from './iconMood';
import Register from './register';
import { useRoutes } from 'react-router-dom';
// import Dashboard from './Dashboard/Dashboard';
// import Preferences from './Preferences/Preferences';

function App() {
  return (
    <div className="wrapper">
      <h1>Cheer Me Up</h1>
          <Register/>
          <IconMood/> 
    </div>

  );
}

export default App;