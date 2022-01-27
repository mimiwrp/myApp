import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Routes, useNavigate, useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Video from "./videoPage.js";

function iconMood() {
  let navigate = useNavigate();

  const handleClick = () => {
      navigate('./videoPage.js');
  }
  return (
    <div>
      <Box className="Box">
        <div>
          <h3 className="greeting">How are you today ?</h3>
        </div>
        <div>
          <Button onClick={handleClick} variant="contained">
            <img src="https://img.icons8.com/ios-glyphs/90/000000/happy--v1.png" />
          </Button>
          <Button onClick={handleClick} variant="contained">
            <img src="https://img.icons8.com/ios-glyphs/90/000000/neutral-emoticon--v2.png" />
          </Button>
          <Button onClick={handleClick} variant="contained">
            <img src="https://img.icons8.com/ios-glyphs/90/000000/sad.png" />
          </Button>

        <Routes>
            <Route exact path="/videoPage" element={<Video/>}/>
        </Routes>
        </div>
      </Box>
    </div>
  );
}


export default iconMood;
