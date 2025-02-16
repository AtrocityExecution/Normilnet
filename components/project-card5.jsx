import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import { hotDogStand } from "./themes";
import expandIcon from '../images-gifs/expand-icon.png';

const ProjectCard5 = () => {

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
    
        <div className="project-card5">
            
            <ThemeProvider theme={hotDogStand}>
                <Window style={{width: 450}}>
                    <WindowHeader className="window-title">
                        <span>Malware_Testing_Unit.exe</span>
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
                                        <h3>Malware Testing Unit</h3>
                                        <p>
                                        Configured a malware testing environment capable of analyzing over 4+ malware variations, including 
                                        droppers, ransomware, trojans, and others, performing static and dynamic analysis, reducing the attack surface 
                                        by 2-fold.
                                        </p>
                                        <p>
                                        Utilized network packet technologies such as Wireshark to detect anomalies in real-time when deploying 
                                        signatures in malware and scanning unusual process activity, portable executables (PE), and DLLs using 
                                        procmon and PEstudio, detecting over 50+ flags and intrusions.
                                        </p>
                                        

                                    </div>
                                )}
                                {tab === 'Technologies' && (
                                    <div>
                                        <ul>
                                            <li>VirtualBox</li>
                                            <li>Linux</li>
                                            <li>INETSim</li>
                                            <li>Wireshark</li>
                                            <li>Procmon</li>
                                            <li>REMux</li>
                                            <li>PEStudio</li>
                                        </ul>
                                    </div>
                                )}
                                {tab === 'Link' && (
                                    <div>
                                        <a href="https://www.linkedin.com/in/normil/overlay/projects/833642047/multiple-media-viewer/?profileId=ACoAADhSIT0BDU7S2dSrqNopsNM_YzUdDCZe5Ig&treasuryMediaId=1738147914083">
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

export default ProjectCard5;