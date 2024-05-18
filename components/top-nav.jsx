import React from "react";
import { Link, Outlet } from "react-router-dom";


const TopNav = () => {

    return (
       
            <div className="top-nav">
                <div><img src="nl-logo1-1.gif" ></img></div>
                
                
                
                <div className="nav-list">
                    <ul class="flex gap-2">
                    <li><Link to='/home'> Home </Link></li>
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