import React from "react"

import ai from "../assets/footer/AI.png"
import slack from "../assets/footer/slack.png"
import trello from "../assets/footer/trello.png"
import google from "../assets/footer/google.png"
import microsoft from "../assets/footer/microsoft A.png"
import gmail from "../assets/footer/Gmail.png"
import jira from "../assets/footer/Jira software.png"
import footerp from "../assets/footer/P logo.png"
import chrome from "../assets/footer/chrome.png"
import azure from "../assets/footer/Azure.png"

const Footer = () => {
    
    let tab = [ ai, slack, trello, google, microsoft, gmail, jira, footerp, chrome, azure ]
    let footerasid = []
    for (let tmp of tab) {
        footerasid.push(<img src={tmp} alt="join us"/> )
    }

    return (
        <footer>
            {footerasid}
        </footer>
    )
}

export default Footer;
