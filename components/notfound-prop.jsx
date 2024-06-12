import React from "react";
import { Link } from 'react-router-dom';
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader, ScrollView } from 'react95';
import { ThemeProvider } from 'styled-components';

import original from 'react95/dist/themes/original';

const NotfoundProp = () => {

    return (
        
        <div className="notfound-prop">
            
            <ThemeProvider theme={original}>
                <Window style={{maxWidth: '350px'}}>
                    <WindowHeader className="window-title">
                        <span>404</span>
                    </WindowHeader>
                    <WindowContent style={{padding: '0.25rem'}}>
                        <ScrollView>
                            <p>Sorry, the page you are looking for does not exist. </p>

                            <h2><Link to='/home'>Go back</Link></h2>
                        </ScrollView>
                    </WindowContent>
                </Window>
            </ThemeProvider>
        </div>
    )

}

export default NotfoundProp