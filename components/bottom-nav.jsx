import React from "react";
import Marquee from "react-fast-marquee";
const moveGif = '../images-gifs/blink.gif';
const moveGif2 = '../images-gifs/netscapecube.gif';
const moveGif3 = '../images-gifs/windows95.gif';
const moveGif4 = '../images-gifs/linuxnow.gif';
const moveGif5 = '../images-gifs/kalibutton.gif';
const moveGif6 = '../images-gifs/hell2.gif';
const moveGif7 = '../images-gifs/antibro3.gif';
const moveGif8 = '../images-gifs/a2600now.gif';
const moveGif9 = '../images-gifs/javabutton.gif';
const moveGif10 = '../images-gifs/macmade.anim.gif';
const moveGif11 = '../images-gifs/mediawindowsdownload.gif';
const moveGif12 = '../images-gifs/vinculo01.gif';

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

                <img src={moveGif8} alt="move8" />
                
                <img src={moveGif9} alt="move9" />
                
                <img src={moveGif10} alt="move10" />

                <img src={moveGif11} alt="move11" />

                <img src={moveGif12} alt="move12" />
  
            </Marquee>
            
        </div> 
    </div>
    
    )
}

export default BottomNav