import { PinDropSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { TikTok } from "react-tiktok";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import Test from '@Add';
import FavoriteIcon from "@mui/icons-material/ThumbUp";
import Delete from "@mui/icons-material/ThumbDown";
// import { ProgressPlugin } from "webpack";
// import 'react-tiktok/dist/index.css';
// import "./styles.css";

const videoObj = {
  //cute
  happy: [
    "https://www.tiktok.com/@scout2015/video/6718335390845095173",
    "https://www.tiktok.com/@miso_ara/video/6797294685082619137",
    "https://www.tiktok.com/@louisthehuskyy/video/7001563051287760133",
  ],
  //#relax
  stressful: [
    "https://www.tiktok.com/@mitch_tiktokz/video/6795111706809961734",
    "https://www.tiktok.com/@_mister_z/video/6807847273549008134",
    "https://www.tiktok.com/@lively.sand/video/6960063334636997894",
  ],
  //#comedy
  bored: [
    "https://www.tiktok.com/@samuelgrubbs/video/6820840648917159174",
    "https://www.tiktok.com/@christian/video/6759245363154128134",
    "https://www.tiktok.com/@ms.nellsbells/video/7012842004686048517",
  ],
};

function vdo(props) {
  let currentMood = props.currentMood;
  const [shuffleValue, setShufflevalue] = useState(0);
  function handleClick() {
    return setShufflevalue(Math.floor(Math.random() * 10));
  }
  let selectedVideo = videoObj[currentMood][shuffleValue];
  console.log(selectedVideo);
  return (
    <div className="App">
      <TikTok className="videoTiktok" url={selectedVideo} />
      <p className="font-link">Does this video make you feel better?</p>
      <Box className="fb" sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab disabled color="primary" aria-label="add">
          <AddIcon onClick={handleClick.bind(this)} />
        </Fab>
        <Fab color="secondary" aria-label="add">
          <Delete onClick={handleClick.bind(this)} />
        </Fab>
        <Fab color="primary" aria-label="like">
          <FavoriteIcon onClick={handleClick.bind(this)} />
        </Fab>
      </Box>
    </div>
  );
}

export default vdo;
