import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import aiee from 'react95/dist/themes/aiee';
import expandIcon from '../images-gifs/expand-icon.png'

const ProjectCard1 = () => {

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
        
        <div className="project-card1">
            
            <ThemeProvider theme={aiee}>
                <Window style={{width: 450}}>
                    <WindowHeader className="window-title">
                        <span>SRCD.exe</span>
                        <div className="window-icons">
                        <Button onClick={toggleMinimize}>
                                <img src={expandIcon} alt="expand-icon"  width={12} height={12}/>
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
                                        
                                        <h3>Server Rack Component Detector</h3>
                                        <p> Developed a mobile app with a team of 5, utilizing machine/deep learning to identify and annotate 
                                            server rack components from images accurately, streamlining inventory management processes.
                                        </p>
                                        <p> Implemented convolutional neural networks for image classification and object detection using 
                                            Keras (TensorFlow) and OpenCV, achieving a 70% accuracy rate in component identification.
                                        </p>
                                        
                                    </div>
                                )}
                                {tab === 'Technologies' && (
                                    <div>
                                        <ul>
                                            <li>Python</li>
                                            <li>TensorFlow</li>
                                            <li>Keras</li>
                                            <li>OpenCV</li>
                                            <li>Sci-kit Learn</li>
                                        </ul>
                                    </div>
                                )}
                                {tab === 'Link' && (
                                    <div>
                                        <a href="https://www.fau.edu/engineering/senior-design/projects/spring2024/serverrackcomponentdetector/">
                                            My project was featured in a showcase!
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

export default ProjectCard1