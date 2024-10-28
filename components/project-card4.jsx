import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import { azureOrange } from "./themes";
import expandIcon from '../images-gifs/expand-icon.png';

const ProjectCard4 = () => {

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
    
        <div className="project-card4">
            
            <ThemeProvider theme={azureOrange}>
                <Window style={{width: 450}}>
                    <WindowHeader className="window-title">
                        <span>BlueTeam.exe</span>
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
                                        <h3>Codepath: Blue Team Set</h3>
                                        <p>
                                        Implemented and managed security monitoring and incident response using Splunk (SIEM), enhancing threat 
                                        detection and analysis capabilities, and developing custom queries and dashboards, resulting in a 30% 
                                        improvement in threat identification and response times.
                                        </p>
                                        <p>
                                        Conducted network traffic analysis and packet inspection with Wireshark and tcpdump, identifying and mitigating instances of
                                        Business Email Compromise (BEC) activities and distinguishing between legitimate and fraudulent emails.
                                        </p>
                                        

                                    </div>
                                )}
                                {tab === 'Technologies' && (
                                    <div>
                                        <ul>
                                            <li>VMware</li>
                                            <li>Linux</li>
                                            <li>Splunk</li>
                                            <li>Wireshark / tcpdump</li>
                                            <li>Snort</li>
                                            <li>Catalyst</li>

                                        </ul>
                                    </div>
                                )}
                                {tab === 'Link' && (
                                    <div>
                                        <a href="https://drive.google.com/drive/folders/1_OWyqI5KDuIvX0lyvGNGMyszu8XNfCbU">
                                            Documentation
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

export default ProjectCard4;