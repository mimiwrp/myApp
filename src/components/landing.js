import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Routes, useNavigate, useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { TikTok } from "react-tiktok";

function iconMood(props) {
  //   let navigate = useNavigate();
  function handleClick(buttonFeeling) {
    // console.log(buttonFeeling);
    props.feeling(buttonFeeling);
    // //   navigate('./videoPage.js');
    // let check = 0;
    // if (check === 0) {
    //   // return <Vdo/>
    // } else {
    //   //change the vdo
    // }
  }
  return (
    <div>
      <Box className="Box">
        <div>
          <h3 className="font-link">How are you feeling today ?</h3>
        </div>
        <div>
          <Button onClick={handleClick.bind(this, "happy")} variant="contained">
            <img src="https://img.icons8.com/ios-glyphs/90/000000/happy--v1.png" />
          </Button>

          <Button onClick={handleClick.bind(this, "bored")} variant="contained">
            <img src="https://img.icons8.com/ios-glyphs/90/000000/neutral-emoticon--v2.png" />
          </Button>

          <Button onClick={handleClick.bind(this, "stressful")} variant="contained">
            <img src="https://img.icons8.com/ios-glyphs/90/000000/sad.png" />
          </Button>

          <div className="font-link">
            <span>Happy</span> <span>Bored</span> <span>Stressful</span>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default iconMood;
