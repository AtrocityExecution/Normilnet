import React from "react";
const notfoundGIF = '../images-gifs/borderunderconst.gif';

const NotFoundPage = () => {
        
            return (
                <div className='not-found'>
                    <h1>404 Not Found</h1>
                    <img src={notfoundGIF} alt='404' />
                
                </div>
            )
}

export default NotFoundPage