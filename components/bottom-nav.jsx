import React from "react";
import Marquee from "react-fast-marquee";
const moveGif = '../images-gifs/blink.gif';
const moveGif2 = '../images-gifs/netscapecube.gif';
const moveGif3 = '../images-gifs/windows95.gif';
const moveGif4 = '../images-gifs/linuxnow.gif';
const moveGif5 = '../images-gifs/kalibutton.gif';
const moveGif6 = '../images-gifs/hell2.gif';
const moveGif7 = '../images-gifs/antibro3.gif';

const BottomNav = () => {



    return (

    <div className="bottom-nav">
        <div className="marquee">

            <Marquee autoFill={true} gradient={false} speed={80} pauseOnHover={true}>
                
                <img src={moveGif} alt="move1" />
                
                <img src={moveGif2} alt="move2" />
                
                <img src={moveGif3} alt="move3" />
                
                <img src={moveGif4} alt="move4" />
                
                <img src={moveGif5} alt="move5" />

                <img src={moveGif6} alt="move6" />

                <img src={moveGif7} alt="move7" />
            </Marquee>
            
        </div> 
    </div>
    
    )
}

export default BottomNav