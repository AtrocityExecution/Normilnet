import React from "react";
import GalleryProp from "../components/gallery-prop";
import sampleImage from "../images-gifs/Me_ascii.png";
import sampleImage2 from "../images-gifs/MOON!.png";
import sampleImage3 from "../images-gifs/MOI concept w0 name.png";
import aiee from 'react95/dist/themes/aiee';
import ash from 'react95/dist/themes/ash';
import blackAndWhite from 'react95/dist/themes/blackAndWhite';
import theSixtiesUSA from 'react95/dist/themes/theSixtiesUSA';

const GalleryPage = () => {
    
        return (
            <div className="gallery-page">
                <div className="gallery-container">
                    <GalleryProp title='Me.exe' image={sampleImage} theme={theSixtiesUSA}/>
                    <GalleryProp title='Moon.exe' image={sampleImage2} theme={ash}/>
                    <GalleryProp title='MOI.exe' image={sampleImage3} theme={blackAndWhite}/>
                    
                </div>
            </div>
        )
}

export default GalleryPage