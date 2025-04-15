import React, { useState, useEffect } from "react";
import { Frame, Button, TabBody, Window, WindowContent, WindowHeader, Toolbar, Tooltip } from 'react95';
import { ThemeProvider } from 'styled-components';
import Draggable from 'react-draggable';
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// might use this later
//import clippy from 'clippyjs';

import {original, rainyDay, vaporTeal, theSixtiesUSA, olive, tokyoDark, rose, plum, matrix, travel, aiee, ash,
    azureOrange, bee, blackAndWhite, blue, brick,candy,cherry,coldGray,counterStrike,darkTeal,denim,eggplant,
    fxDev,hotDogStand, lilac, lilacRoseDark, maple, marine, millenium, modernDark, molecule, ninjaTurtles,
    pamelaAnderson, peggysPastels, polarized, powerShell, raspberry, redWine, seawater, shelbiTeal, slate, 
    solarizedDark, solarizedLight, spruce, stormClouds, toner, tooSexy, vermillion, violetDark, vistaesqueMidnight,
    water, white, windows1, wmii} from '../components/themes';

import expandIcon from '../images-gifs/expand-icon.png'
import themeIcon from '../images-gifs/codeblock.png'

const SkillsCard = () => {
    
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
        const [hoveredSkill, setHoveredSkill] = useState('')
        
        const toggleMinimize = () => {
            setIsMinimized(!isMinimized);
        }

        const handleMouseEnter = (skillInfo) => {
            setHoveredSkill(skillInfo)
        }

        const handleMouseLeave = () => {
            setHoveredSkill('')
        }
        
        const changeTheme = () => {
            const nextThemeIndex = (themeIndex + 1) % themes.length;
            setTheme(themes[nextThemeIndex]);
            setThemeIndex(nextThemeIndex);
        }
    
        return (
            
            
            <div className="skills-card">
                
                <ThemeProvider theme={theme}>
                    <Draggable handle=".window-title">
                        <div>
                            <Window style={{width: 750}}>
                                <WindowHeader className="window-title">
                                    <span>Skills.exe</span>
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
                                        <p>My Toolset... </p>
                                        <p>Hover to learn more.</p>
                                        <Frame variant='inside' style={{ margin: '1rem', padding: '1rem', overflowY: 'auto', width: 650}}>
                                            
                                            <div className="skills-window">
                                
                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter(' Python - Years of experience: 4 (Intermediate), Technologies/Libraries Used: TensorFlow, Keras, OpenCV, Pandas, Scikit-learn, Matplotlib, Seaborn, Regex, Jupyter Notebooks ')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}/>
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Linux - Years of experience: 2 (Intermediate), Technologies/Libraries Used: Unix, tcpdump, Vim')} onMouseLeave={handleMouseLeave}>   
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Bash - Years of Experience: 2 (Intermediate)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Vim - Years of Experience: 1 (Beginner)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Powershell - Years of Experience: 1 (Beginner)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Splunk - Years of Experience: 1 (Beginner)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/splunk/splunk-original-wordmark.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Git - Years of Experience: 2 (Beginner)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('AWS - Years of experience: 1 (Intermediate)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Azure - Years of experience: 1 (Intermediate)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('VMware/VirtualBox - Years of Experience: 2 (Beginner)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vsphere/vsphere-original.svg" />          
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Unity - Years of experience: 0.5 (6 months) (Beginner)')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Latex Suite - Years of experience: 1 (Beginner)')} onMouseLeave={handleMouseLeave}>     
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('SQL - Years of Experience: 2 (Intermediate), Technologies/Libraries Used: MySQL, SQLite3, Supabase.js')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
                                                </Frame>

                                                <Frame variant='field' style={{margin: '1rem', padding: '1rem', height: 100, width: 100}}
                                                 onMouseEnter={() => handleMouseEnter('Javascript - Years of Experience: 2 (Beginner), Technologies/Libraries Used: React, Node.js, Supabase.js, Vite')} onMouseLeave={handleMouseLeave}>
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            
                                                </Frame>

                                            </div>

                                            <Frame variant='well' className="window-footer">
                                                
                                                    {hoveredSkill ? (
                                                        <Marquee gradient={false} pauseOnHover={true} speed={100}>
                                                            {hoveredSkill}
                                                        </Marquee>

                                                    ) : (
                                                        <Marquee gradient={false} pauseOnHover={true}>
                                                            on_standby...
                                                        </Marquee> 

                                                    )}
                                                  
                                            </Frame>
                                          
                                        </Frame>

                                    </WindowContent>
                                )}
                            </Window>
                        </div>
                    </Draggable>
                    
                </ThemeProvider>
            </div>
        )
}

export default SkillsCard

