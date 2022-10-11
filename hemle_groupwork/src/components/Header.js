import React from "react"
import logo from "../assets/tools/logo.png"

//import {FaSearch} from "react-icons/fa";
//import {World} from "react-icons/md";
//import {AiOutlineDown} from "react-icons/ai";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="Hemle's logo"/>
      
      <div>
        <ul>
          <a href='?v#'> <li> Acceuil </li> </a>
          <a href='?v#'> <li> Prestation </li> </a>
          <a href='?v#'> <li> Nos clients </li> </a>
          <a href='?v#'> <li> A propos </li> </a>
        </ul>
      </div>

      <div id="navtools">
        <a href="?f=l#" alt="link to connect"> <button> Se connecter </button> </a>
      </div>
    </nav>
  );
}

export default Header;
