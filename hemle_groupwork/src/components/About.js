import React from "react"
//import Header from './Header.js'
import Video from './Video.js'
import Sect1 from "./Section1.js"
import Sect2 from "./Section2.js"
import Sect3 from "./Section3.js"
import Sect4 from "./Section4.js"
import Footer from "./Footer.js"

import "./styles/about.css"

const About = () => {
  return (
    <React.Fragment>
      <Video/>
      <Sect1/>
      <Sect2/>
      <Sect3/>
      <Sect4/>
      <Footer/>
    </React.Fragment>
  );
}

export default About;
