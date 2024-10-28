import React from "react";
import { Link, Outlet } from "react-router-dom";
import titleTheme from '../images-gifs/n_title3.gif'


const TopNav = () => {

    return (
       
            <div className="top-nav">
                <div><img src={titleTheme} width="400px"></img></div>
                
                <div className="nav-list">
                    <ul class="flex gap-2">
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/gallery'>Gallery</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/reading'>Reading</Link></li>
                    </ul>
                </div>
                <Outlet />
            </div>
            
        

    )
}

export default TopNav