import React, { useState } from "react";
import { Tab, TabBody, Tabs,
     Window, WindowContent, WindowHeader } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import aiee from 'react95/dist/themes/original';



const Windows95Prop = () => {

    const [tab, setTab] = useState({
        tab: 'About'
    });

    const handleChange = (value) => {
        setTab(value);
    }

    return (
        <Draggable>
        <div className="main-popup">
            
            <ThemeProvider theme={aiee}>
                <Window style={{width: 450}}>
                    <WindowHeader>popup.exe</WindowHeader>
                        <WindowContent>
                            <Tabs rows={2} value={tab} onChange={handleChange}>
                                <Tab value="About">About Me!</Tab>
                                <Tab value="Projects">Projects</Tab>
                                <Tab value="Sites">Sites</Tab>
                            </Tabs>
                            <TabBody style={{height: 300}}>
                                {tab === 'About' && (
                                    <div>
                                        <p> Greetings! My name is Normil Luccin
                                            and I am a soon to be graduate at Florida Atlantic University
                                            with a Bachelor's Degree in Computer Science!
                                        </p>
                                        <br/>

                                        <h3>I soon hope to be a part of developing and automating the duties of
                                            the human race!
                                        </h3>

                                    </div>
                                )}
                                {tab === 'Projects' && (
                                    <div>
                                        <p>The vast majority of my projects are in my <a href="https://github.com/AtrocityExecution">Github</a>, but in the meantime...</p>
                                        <h4>Checkout some of my <Link to='/projects' >featured projects!</Link></h4>
                                    </div>
                                )}
                                {tab === 'Sites' && (
                                    <div>
                                        <p>Checkout some of my websites!</p>
                                        <a href="https://anima-vista.netlify.app/">Anima Vista</a>
                                    </div>
                                )}

                            </TabBody>
                            
                        </WindowContent>
                </Window>
            </ThemeProvider>
            
        </div>
        </Draggable>
    )
}

export default Windows95Prop