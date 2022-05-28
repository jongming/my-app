import React from "react";
import reactLogo from "../images/react-icon-small.png"

export default function Navbar(){
    return(
        <nav>
            <img src={reactLogo} alt="logo"  />
            <h3>ReactFacts</h3>
            <h4>React Course: Project 1</h4>
        </nav>
    )
}