import React, { useState } from "react";
import { Frame, Button, Tab, TabBody, Tabs, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow,
    Window, WindowContent, WindowHeader, Toolbar } from 'react95';
import { ThemeProvider } from 'styled-components';
import Draggable from 'react-draggable';
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {original, rainyDay, vaporTeal, theSixtiesUSA, olive, tokyoDark, rose, plum, matrix, travel, aiee, ash,
    azureOrange, bee, blackAndWhite, blue, brick,candy,cherry,coldGray,counterStrike,darkTeal,denim,eggplant,
    fxDev,hotDogStand, lilac, lilacRoseDark, maple, marine, millenium, modernDark, molecule, ninjaTurtles,
    pamelaAnderson, peggysPastels, polarized, powerShell, raspberry, redWine, seawater, shelbiTeal, slate, 
    solarizedDark, solarizedLight, spruce, stormClouds, toner, tooSexy, vermillion, violetDark, vistaesqueMidnight,
    water, white, windows1, wmii} from '../components/themes';

import expandIcon from '../images-gifs/expand-icon.png'
import themeIcon from '../images-gifs/codeblock.png'
import certificate from '../images-gifs/security+ certificate.png'
import hiveStorm from '../images-gifs/hivestorm.png'
import sfc1 from '../images-gifs/sfc1.png'
import sfc2 from '../images-gifs/sfc2.png'
import sfc3 from '../images-gifs/sfc3.png'
import sfc4 from '../images-gifs/sfc4.png'
import sfc5 from '../images-gifs/sfc5.png'
import sfc6 from '../images-gifs/sfc6.png'
import sfc7 from '../images-gifs/sfc7.png'
import sfc8 from '../images-gifs/sfc8.png'
import sfc9 from '../images-gifs/sfc9.png'
import sfc10 from '../images-gifs/sfc10.png'
import sfc11 from '../images-gifs/sfc11.png'
import sfc12 from '../images-gifs/sfc12.png'
import sfc13 from '../images-gifs/sfc13.png'

const BlogCard = () => {
    
        const [isMinimized, setIsMinimized] = useState(true);
        const [theme, setTheme] = useState(original);
        const themes = [original, aiee, rainyDay, vaporTeal, theSixtiesUSA,
             olive, tokyoDark, matrix, rose, plum,
              azureOrange, hotDogStand, denim, powerShell, pamelaAnderson,
            bee, ash, travel, blackAndWhite, blue, brick, candy, cherry, 
            coldGray, counterStrike, darkTeal, eggplant, fxDev, lilac, lilacRoseDark,
             maple, marine, millenium, modernDark, molecule, ninjaTurtles, peggysPastels,
              polarized, raspberry, redWine, seawater, shelbiTeal, slate, solarizedDark, 
              solarizedLight, spruce, stormClouds, toner, tooSexy, vermillion, violetDark, 
              vistaesqueMidnight, water, white, windows1, wmii];
        const [themeIndex, setThemeIndex] = useState(0);
        const [popupWindows, setPopupWindows] = useState([]);
        
        const toggleMinimize = () => {
            setIsMinimized(!isMinimized);
        }
        
        const changeTheme = () => {
            const nextThemeIndex = (themeIndex + 1) % themes.length;
            setTheme(themes[nextThemeIndex]);
            setThemeIndex(nextThemeIndex);
        }

        const handlePostClick = (postTitle, postContent, postImages) => {
            setPopupWindows([...popupWindows, {title: postTitle, content: postContent, images: postImages}]);
        }

        const closePopup = (index) => {
            setPopupWindows(popupWindows.filter((_, i) => i !== index));
        } 

        const posts = [
            {title: 'Security+',
            date: '06/29/2024',
            content: 'After long hours of studying, I obtained the CompTIA Security+ from CompTIA! This is a valuable certificate to which I enjoyed learning about the concepts of security, and I hope to utilize this to work in the field of cybersecurity!'
            ,images: [certificate]},

            {title: 'SFISSA Conference!',
            date: '09/21/2024',
            content: 'On September 21st, a attended the SFISSA CTF conference. This was a great experience where I learned a lot about cybersecurity and met some great people! I also participated in the CTF and learned a lot from it! I also stumbled across artifacts from the past, including the PS1 from IBM and early versions of Windows and Mac!',
            images: [sfc1,sfc2,sfc3, sfc4, sfc5, sfc6, sfc7,
                 sfc8, sfc9, sfc10, sfc11, sfc12, sfc13]},

            {title: 'Hivestorm CTF',
            date: '10/17/2024',
            content: 'I participated in the Hivestorm CTF on October 17th. This CTF was in testing my system configuration and forensics skills on Windows and Linux. After 4 hours, we ended up in the top 50% of about 450 teams, which was a great accomplishment in my book!',
            images: [hiveStorm]}

            
        ]

        const settings = {
            className: "center",
            adaptiveHeight: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    
        return (
            
            
            <div className="blog-card">
                
                <ThemeProvider theme={theme}>
                    <Draggable handle=".window-title">
                        <div>
                            <Window style={{width: 950}}>
                                <WindowHeader className="window-title">
                                    <span>Blog.exe</span>
                                    <div className="window-icons">
                                        <Button onClick={toggleMinimize}>
                                                <img src={expandIcon} alt="expand-icon"  width={12} height={12}/>
                                        </Button>
                                        <Button onClick={changeTheme}>
                                                <img src={themeIcon} alt="change-theme-icon"  width={12} height={12}/>
                                        </Button>
                                    </div>
                                </WindowHeader>

                                <Toolbar className="window-toolbar">
                                    <Button variant="menu" size="sm">
                                        File
                                    </Button>
                                    <Button variant="menu" size="sm">
                                        Edit
                                    </Button>
                                    <Button variant="menu" size="sm">
                                        View
                                    </Button>
                                    <Button variant="menu" size="sm">
                                        Help
                                    </Button>
                                </Toolbar>

                                {isMinimized ? (
                                <WindowContent>
                                    <TabBody style={{display: 'none'}}>
            
                                    </TabBody>
            
                                </WindowContent>) : (
                                    <WindowContent >
                                        <p>My makeshift Blog! </p>
                                        To scroll through the images, click & drag or use arrow keys!
                                        <Table>

                                        <TableHead>
                                            <TableRow>
                                            <TableHeadCell>Post #</TableHeadCell>
                                            <TableHeadCell>Name</TableHeadCell>
                                            <TableHeadCell>Date</TableHeadCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>

                                        {posts.map((post, index) => (
                                                <TableRow key={index} onClick={() => handlePostClick(post.title, post.content, post.images)}>
                                                    <TableDataCell>{index + 1}</TableDataCell>
                                                    <TableDataCell>{post.title}</TableDataCell>
                                                    <TableDataCell>{post.date}</TableDataCell>
                                                </TableRow>
                                        ))}

                                        </TableBody>
                                    </Table>
                                    </WindowContent>
                                )}
                            </Window>
                        </div>
                    </Draggable>
                    {popupWindows.map((popup, index) => (
                        <Draggable key={index} handle=".window-title">
                            <div className="popup-window">
                                <Window>
                                    <WindowHeader className="window-title">
                                        <span>{popup.title}.exe</span>
                                        <Button onClick={() => closePopup(index)}>X</Button>
                                    </WindowHeader>

                                    <WindowContent className="window-content">
                                        <Frame variant='field' className="window-frame">
                                            <Slider {...settings}>
                                                {popup.images.map((image, imgIndex) => (
                                                    <div key={imgIndex} className="frame-image">
                                                        <img src={image} alt={`post-image-${imgIndex}`}/>
                                                    </div>
                                                ))}
                                            </Slider>    
                                        </Frame>
                                        <div style={{margin: '10px'}}>
                                            <p>{popup.content}</p>
                                        </div>
                                        
                                    </WindowContent>

                                    <Frame variant='well' className="window-footer">
                                        <Marquee gradient={true} pauseOnHover={true}>
                                            Like what you see? Check out the site's repository <a href="https://github.com/AtrocityExecution/Normilnet" target="_blank" rel="noopener noreferrer">here</a>!
                                        </Marquee>    
                                    </Frame>
                                </Window>
                            </div>
                        </Draggable>
                    ))}
                </ThemeProvider>
            </div>
        )
}

export default BlogCard

