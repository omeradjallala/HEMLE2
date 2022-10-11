import React from "react"

import person0 from "../assets/asides/person0.png"
import person1 from "../assets/asides/person1.png"
import person2 from "../assets/asides/person2.png"
import person3 from "../assets/asides/person3.png"
import person4 from "../assets/asides/person4.png"
import person5 from "../assets/asides/person5.png"
import person6 from "../assets/asides/person6.png"
import person7 from "../assets/asides/person7.png"
import person8 from "../assets/asides/person8.png"
import person9 from "../assets/asides/person9.png"
import person10 from "../assets/asides/person10.png"
import person11 from "../assets/asides/person11.png"

import bar from "../assets/tools/bar.png"

const Section4 = () => {
    
    let tab = [ person0, person1, person2, person3, person4, person5,
        person6, person7, person8, person9, person10, person11]
    let rest = []
    
    for (let tmp of tab)
        rest.push(
            <div class="asid"> <img src={tmp} alt=""/>
                <h2> Nom & Prenom </h2>
                <p> FONCTION (Ex:CEO) </p>
            </div>
        )

    return (
        <section id="section4">

            <div id="sec_info">
                <h2> Notre equipe de direction </h2>
                <img src={bar} alt="multicolor bar"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim blandit arcu nisl
                    erat sit urna. Eget et ut quam malesuada congue. 
                </p>
            </div>

            <div id="allasid"> {rest} </div>

            <div id="sec_info">
                <h2> Nos partenaires </h2>
                <img src="./assets/tools/bar.png" alt="multicolor bar"/>
                <p>
                    Nous sommes prêts à tout pour vous offir le meilleur du football africain avec :
                </p>
            </div>

        </section>
    )
}

export default Section4;
