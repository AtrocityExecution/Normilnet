import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader } from 'react95';
import { ThemeProvider } from 'styled-components';
import { spruce } from '../components/themes';
import expandIcon from '../images-gifs/expand-icon.png';

const ProjectCard6 = () => {

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
    
        <div className="project-card6">
            
            <ThemeProvider theme={spruce}>
                <Window style={{width: 450}}>
                    <WindowHeader className="window-title">
                        <span>AWS_suite.exe</span>
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
                                        <h3>AWS_suite</h3>
                                        <p>
                                            Created a series of projects using AWS which involved creating
                                            custom IAM policies to enforce environment-based access control for EC2, 
                                            designing and launched a secure VPC with public subnets and internet gateway,
                                            hosting a static website on S3, configuring bucket permissions and static hosting,
                                            and visualizing Netflix datasets using QuickSight, integrating data from S3 and 
                                            creating interactive dashboards.
                                        </p>
                                        
                                        

                                    </div>
                                )}
                                {tab === 'Technologies' && (
                                    <div>
                                        <ul>
                                            <li>EC2 'Elastic Compute Cloud'</li>
                                            <li>IAM Policies</li>
                                            <li>VPC 'Virtual Private Cloud'</li>
                                            <li>S3</li>
                                            <li>Quicksight</li>
                                        </ul>
                                    </div>
                                )}
                                {tab === 'Link' && (
                                    <div>
                                        <a href="https://drive.google.com/drive/folders/18AdVDql1ax0I4IS8gIOV4NoH1dEwHefY?usp=sharing">
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

export default ProjectCard6;