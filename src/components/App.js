import React, { useState } from "react";
import "./style.css";
// import Button from '@mui/material/Button';
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import IconMood from "./landing";
import Register from "./register";
import Vdo from "./video";
import FloatingActionButtons from "./feedback";
import { useRoutes } from "react-router-dom";
// import Dashboard from './Dashboard/Dashboard';
// import Preferences from './Preferences/Preferences';

function App() {
  const [feeling, setFeeling] = useState("happy");
  function getFeeling(currentFeeling) {
    return setFeeling(currentFeeling);
  }
  return (
    <div className="wrapper">
      <h1 className="font-link">Cheer Me Up</h1>
      <h4>I feel {feeling}</h4>
      <Register />
      <IconMood feeling={getFeeling} />
      <Vdo/>
      <FloatingActionButtons />
    </div>
  );
}

export default App;
