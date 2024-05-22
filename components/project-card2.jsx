import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import Draggable from 'react-draggable';

import denim from 'react95/dist/themes/denim';

const ProjectCard2 = () => {

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
        <div className="project-card2">
            
            <ThemeProvider theme={denim}>
                <Window style={{width: 450}}>
                    <WindowHeader className="window-title">
                        <span>Anima-Vista.exe</span>
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

                        </WindowContent> ) : (
                            <WindowContent>
                            <Tabs value={tab} onChange={handleChange}>
                                <Tab value="About">Description</Tab>
                                <Tab value="Technologies">Tech Used</Tab>
                                <Tab value="Link">Link</Tab>
                            </Tabs>
                            <TabBody style={{height: 300}}>
                                {tab === 'About' && (
                                    <div>

                                        <h3>Anima-Vista</h3>
                                        <p >  Developed Anima-Vista, a forum web application utilizing React.js, Supabase.js, and Node.js,
                                             providing users with a platform for memory preservation and nostalgia.
                                        </p>

                                    </div>
                                )}
                                {tab === 'Technologies' && (
                                    <div>
                                        <ul>
                                            <li>React.js</li>
                                            <li>Supabase.js</li>
                                            <li>Node.js</li>
                                        </ul>
                                    </div>
                                )}
                                {tab === 'Link' && (
                                    <div>
                                        <a href="https://anima-vista.netlify.app/">Anima Vista</a>
                                        <br/>
                                        <a href="">Github</a>
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

export default ProjectCard2