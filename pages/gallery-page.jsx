import React from "react";
import GalleryProp from "../components/gallery-prop";
import sampleImage from "../images-gifs/Me_ascii.png";
import sampleImage2 from "../images-gifs/MOON!.png";
import sampleImage3 from "../images-gifs/MOI concept w0 name.png";
import sampleImage4 from "../images-gifs/2008.png";
import sampleImage5 from "../images-gifs/angel_d.jpg";
import sampleImage6 from "../images-gifs/MOONE!.png";
import sampleImage7 from "../images-gifs/MOTH.png";
import sampleImage8 from "../images-gifs/DEATHDREAM.png";
import sampleImage9 from "../images-gifs/blankface.png";

import { ash, blackAndWhite, theSixtiesUSA, tokyoDark, toner, denim, vistaesqueMidnight, solarizedLight } from '../components/themes';

const GalleryPage = () => {
    
        return (
            <div className="gallery-page">
                <div className="gallery-container">

                    <GalleryProp title='Me.png' image={sampleImage} theme={theSixtiesUSA}/>
                    <GalleryProp title='Moon.png' image={sampleImage2} theme={ash}/>
                    <GalleryProp title='MOI.png' image={sampleImage3} theme={blackAndWhite}/>
                    <GalleryProp title='2008.png' image={sampleImage4} theme={tokyoDark}/>
                    <GalleryProp title='angel_destroyed.jpg' image={sampleImage5} theme={toner}/>
                    <GalleryProp title='moon_crossight.png' image={sampleImage6} theme={toner}/>
                    <GalleryProp title='moth.png' image={sampleImage7} theme={vistaesqueMidnight}/>
                    <GalleryProp title='deathdream.png' image={sampleImage8} theme={denim}/>
                    <GalleryProp title='light.png' image={sampleImage9} theme={solarizedLight}/>
                    

                </div>
            </div>
        )
}

export default GalleryPage