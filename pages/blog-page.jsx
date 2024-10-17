import React from "react";
import BorderUnderConst from "../images-gifs/borderunderconst.gif";
import BlogCard from "../components/blog-card";
import Draggable from "react-draggable";


const BlogPage = () => {
    
        return (
            <div className="blog-page">
                <img src={BorderUnderConst} alt="coming soon" />
                
                    <Draggable defaultPosition={{x: 50, y: 50}}>
                        <div>
                            <BlogCard />
                        </div>
                        
                    </Draggable>
                

            </div>
        )
}

export default BlogPage