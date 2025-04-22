import React from "react";
import Window95Prop from "../components/windows95prop";
import { Monitor } from "react95";
import Draggable from "react-draggable";


const HomePage = () => {

    
    return (
        <div className="home-page">
            <Window95Prop />

            <Draggable defaultPosition={{x: 650, y: 250}}>
                <div className="monitor" >
                    <Monitor backgroundStyles={{ backgroundImage: 'url(../images-gifs/Wand.jpg)',
                         backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </div>
            </Draggable>

            
        </div>
    )
}

export default HomePage