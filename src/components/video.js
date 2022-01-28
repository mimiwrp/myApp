import React from "react";
import { TikTok } from "react-tiktok";
// import 'react-tiktok/dist/index.css';
// import "./styles.css";

function vdo() {
  // const [feeling, setFeeling] = useState("happy");
  // alert(feeling);
  const videoObj = {
    //cute
    happy: [
      "https://www.tiktok.com/@scout2015/video/6718335390845095173",
      'https://www.tiktok.com/@miso_ara/video/6797294685082619137?is_from_webapp=1&sender_device=pc&web_id7049942084988012037',
      'https://www.tiktok.com/@louisthehuskyy/video/7001563051287760133?is_from_webapp=1&sender_device=pc&web_id7049942084988012037',
    ],
    //#relax
    stressful: [
      "https://www.tiktok.com/@mitch_tiktokz/video/6795111706809961734?is_from_webapp=1&sender_device=pc&web_id7049942084988012037",
      "https://www.tiktok.com/@_mister_z/video/6807847273549008134?is_from_webapp=1&sender_device=pc&web_id7049942084988012037",
      "https://www.tiktok.com/@lively.sand/video/6960063334636997894?is_from_webapp=1&sender_device=pc&web_id7049942084988012037"
    ],
    //#comedy
    bored: [
      'https://www.tiktok.com/@samuelgrubbs/video/6820840648917159174?is_from_webapp=1&sender_device=pc&web_id7049942084988012037',
      'https://www.tiktok.com/@christian/video/6759245363154128134?is_from_webapp=1&sender_device=pc&web_id7049942084988012037',
      'https://www.tiktok.com/@ms.nellsbells/video/7012842004686048517?is_from_webapp=1&sender_device=pc&web_id7049942084988012037',
    ]
  };
  return (
    <div className="App">
      <TikTok url={videoObj.happy[0]} />
    </div>
  );
}

export default vdo;
