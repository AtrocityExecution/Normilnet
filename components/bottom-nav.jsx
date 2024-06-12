import React from "react";
import Marquee from "react-fast-marquee";
import moveGif from "../images-gifs/blink.gif";
import moveGif2 from "../images-gifs/netscapecube.gif";
import moveGif3 from "../images-gifs/windows95.gif";
import moveGif4 from "../images-gifs/linuxnow.gif";
import moveGif5 from "../images-gifs/kalibutton.gif";
import moveGif6 from "../images-gifs/hell2.gif";
import moveGif7 from "../images-gifs/antibro3.gif";
import moveGif8 from "../images-gifs/a2600now.gif";
import moveGif9 from "../images-gifs/javabutton.gif";
import moveGif10 from "../images-gifs/macmade.anim.gif";
import moveGif11 from "../images-gifs/mediawindowsdownload.gif";
import moveGif12 from "../images-gifs/vinculo01.gif";

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