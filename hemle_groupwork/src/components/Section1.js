import React from "react"

import africa from "../assets/images/africa.png"
import man from "../assets/images/man.png"
import bar from "../assets/tools/bar.png"

//import {FaSearch} from "react-icons/fa";
//import {World} from "react-icons/md";
//import {AiOutlineDown} from "react-icons/ai";

const Section1 = () => {
  return (
    <div id="section1">
      
      <div id="africa">
          <article>
              <h2> Hemle </h2>
              <h3> Since 1987 </h3>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                  erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                  blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                  Tortor, viverra libero non ac dui. Velit praesent turpis quam nam magna.
              </p>
          </article> <img src={africa} alt='africa map'/>
      </div>
      
      <div id="man">
          <article>
              <h1> Nos objectifs </h1>
              <img src={bar} alt="multicolor bar"/>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                  erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                  blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                  Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
              </p> <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                  erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi adipiscing
                  blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo proin et.
                  Tortor, <span>dignissim blandit</span> dui. Velit praesent turpis quam nam magna.
              </p>
          </article> <img src={man} alt='a smilling man'/>
      </div>

    </div>
  );
}

export default Section1;
