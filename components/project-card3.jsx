import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import Draggable from 'react-draggable';

import pamelaAnderson from 'react95/dist/themes/pamelaAnderson';

const ProjectCard3 = () => {

    const [tab, setTab] = useState({
        tab: 'About'
    });

    const [isMinimized, setIsMinimized] = useState(true);

    const handleChange = (value) => {
        setTab(value);
    }

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    }

    return (
    
        <div className="project-card3">
            
            <ThemeProvider theme={pamelaAnderson}>
                <Window style={{width: 450}}>
                    <WindowHeader className="window-title">
                        <span>Lynx.exe</span>
                        <div className="window-icons">
                        <Button onClick={toggleMinimize}>
                                <img src={'../images-gifs/expand-icon.png'} alt="expand-icon"  width={12} height={12}/>
                        </Button>
                        </div>
                    </WindowHeader>
                    {isMinimized ? (
                    <WindowContent>
                        <TabBody style={{display: 'none'}}>

                        </TabBody>

                    </WindowContent>) : (
                        <WindowContent>
                            <Tabs value={tab} onChange={handleChange}>
                                <Tab value="About">Description</Tab>
                                <Tab value="Technologies">Tech Used</Tab>
                                <Tab value="Link">Link</Tab>
                            </Tabs>
                            <TabBody style={{height: 300}}>
                                {tab === 'About' && (
                                    <div>
                                        <h3>Lynx</h3>
                                        <p> Developed a digital distribution platform for indie game developers, 
                                            facilitating game uploads, player access, and developer support.
                                        </p>
                                        <p>
                                        Designed a modern, intuitive frontend interface using Electron.js and Node.js,
                                         resulting in a user-friendly experience for gamers and developers.
                                         </p>
                                        

                                    </div>
                                )}
                                {tab === 'Technologies' && (
                                    <div>
                                        <ul>
                                            <li>Linux</li>
                                            <li>Django</li>
                                            <li>Electron.js</li>
                                            <li>Node.js</li>
                                            <li>Git</li>
                                        </ul>
                                    </div>
                                )}
                                {tab === 'Link' && (
                                    <div>
                                        <a href="https://github.com/RARM/Lynx">
                                            Github
                                        </a>
                                    </div>
                                )}
                            </TabBody>
                    </WindowContent>
                )}
                    
                </Window>
            </ThemeProvider>
            
        </div>
        
    )
}

export default ProjectCard3