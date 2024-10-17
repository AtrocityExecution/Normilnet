import React, {useState} from "react";
import { Button, Tab, TabBody, Tabs, Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow,
    Window, WindowContent, WindowHeader, Toolbar } from 'react95';
import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import aiee from 'react95/dist/themes/aiee';
import rainyDay from 'react95/dist/themes/rainyDay';
import vaporTeal from 'react95/dist/themes/vaporTeal';
import theSixtiesUSA from 'react95/dist/themes/theSixtiesUSA';
import expandIcon from '../images-gifs/expand-icon.png'
import themeIcon from '../images-gifs/codeblock.png'

const BlogCard = () => {
    
        const [isMinimized, setIsMinimized] = useState(true);
        const [theme, setTheme] = useState(original);
        const themes = [original, aiee, rainyDay, vaporTeal, theSixtiesUSA];
        const [themeIndex, setThemeIndex] = useState(0);

        const [tab, setTab] = useState({
            tab: 'About'
        });
    
        const handleChange = (value) => {
            setTab(value);
        }
        
        const toggleMinimize = () => {
            setIsMinimized(!isMinimized);
        }

        
        const changeTheme = () => {
            const nextThemeIndex = (themeIndex + 1) % themes.length;
            setTheme(themes[nextThemeIndex]);
            setThemeIndex(nextThemeIndex);
        }
    
        return (
            
            <div className="blog-card">
                
                <ThemeProvider theme={theme}>
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
                            <WindowContent>
                                Select a post!
                                <Table>

                                  <TableHead>
                                    <TableRow>
                                      <TableHeadCell>Post #</TableHeadCell>
                                      <TableHeadCell>Name</TableHeadCell>
                                      <TableHeadCell>Date</TableHeadCell>
                                    </TableRow>
                                  </TableHead>

                                 <TableBody>

                                   <TableRow id="post1">
                                    <TableDataCell style={{ textAlign: 'center' }}>
                                       <span>1</span>
                                    </TableDataCell>
                                      <TableDataCell>Security+</TableDataCell>
                                     <TableDataCell>6/29/2024</TableDataCell>
                                   </TableRow>

                                  <TableRow>
                                    <TableDataCell style={{ textAlign: 'center' }}>
                                        <span>2</span>
                                    </TableDataCell>
                                    <TableDataCell>SFISSA Conference!</TableDataCell>
                                    <TableDataCell>?/?/?</TableDataCell>
                                   </TableRow>

                                   <TableRow>
                                     <TableDataCell style={{ textAlign: 'center' }}>
                                        <span>3</span>
                                     </TableDataCell>
                                     <TableDataCell>Hivestorm CTF</TableDataCell>
                                     <TableDataCell>10/17/2024</TableDataCell>
                                   </TableRow>

                                 </TableBody>
                               </Table>
                            </WindowContent>
                        )}
                    </Window>
                </ThemeProvider>
            </div>
        )
}

export default BlogCard