import React from "react";
import Draggable from "react-draggable";
import { motion } from "framer-motion";
import construction from "../images-gifs/construction.gif";
import csharp from "../images-gifs/csharp.png";


const SkillsPage = () => {


    const tech = [
        csharp,
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    ]

    

    return (
        <div className="skills-page">
            <img src={construction} alt="coming soon" />
        </div>
        
    )
}

export default SkillsPage
