import React from "react"

import lamp from "../assets/images/lamp.png"
import cam from "../assets/images/camera.png"
import foot1 from "../assets/asides/Foot_Afrique0.png"
import foot2 from "../assets/asides/Foot_Afrique1.png"

const Section3 = () => {
  return (
    <div id="section3">

        <img src={lamp} id="lamp" alt="a lamp"/>

        <img src={cam} id="cam" alt="a camera"/>

        <div id="objectifs">
            
            <article>
                <h2> Nos objectifs </h2>
                <h3> Tout pour le football africain </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span>Dignissim blandit</span>
                    arcu nisl erat sit urna. Eget et ut quam malesuada congue. Justo venenatis ac nisi
                    adipiscing blandit viverra tincidunt est luctus. Et quam tincidunt venenatis, commodo
                    proin et. Tortor, viverra libero non ac dui. Velit praesent turpis quam nam magna.
                </p>
            </article>
            
            <div class="asides">
                <div class="asid"> <img src={foot1} alt="Foot Afrique 1"/> </div>
                <div class="asid"> <img src={foot2} alt="Foot Afrique 2"/> </div>
            </div>
        
        </div>

    </div>
  );
}

export default Section3;
