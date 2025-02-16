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
import { ash, blackAndWhite, theSixtiesUSA, tokyoDark, toner, denim, vistaesqueMidnight } from '../components/themes';

const GalleryPage = () => {
    
        return (
            <div className="gallery-page">
                <div className="gallery-container">
                    <GalleryProp title='Me.exe' image={sampleImage} theme={theSixtiesUSA}/>
                    <GalleryProp title='Moon.exe' image={sampleImage2} theme={ash}/>
                    <GalleryProp title='MOI.exe' image={sampleImage3} theme={blackAndWhite}/>
                    <GalleryProp title='2008.exe' image={sampleImage4} theme={tokyoDark}/>
                    <GalleryProp title='angel_destroyed.exe' image={sampleImage5} theme={toner}/>
                    <GalleryProp title='moon_cross.exe' image={sampleImage6} theme={toner}/>
                    <GalleryProp title='moth.exe' image={sampleImage7} theme={vistaesqueMidnight}/>
                    <GalleryProp title='deathdream.exe' image={sampleImage8} theme={denim}/>


                </div>
            </div>
        )
}

export default GalleryPage