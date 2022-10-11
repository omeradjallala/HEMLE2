import React from "react"

import vid from "../videos/faune.mp4"
import poster from "../videos/poster.png"

//import {FaSearch} from "react-icons/fa";
//import {World} from "react-icons/md";
//import {AiOutlineDown} from "react-icons/ai";

const Video = () => {
  return (
    <div id="vidiv">

      <video src={vid} poster={poster} alt="welcome video" controls loop/>
      
      <div id="vidctrl">
        <button id='less'> Acceuil </button>
        <button id='pause'> Prestation </button>
        <button id='more'> Nos clients </button>
      </div>

    </div>
  );
}

export default Video;
