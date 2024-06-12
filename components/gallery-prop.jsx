import React from "react";
import { Button, Tab, TabBody, Tabs,
    Window, WindowContent, WindowHeader, ScrollView } from 'react95';
import { ThemeProvider } from 'styled-components';

const GalleryProp = ({title, image, theme}) => {

    return (
        
        <div className="gallery-prop">
            
            <ThemeProvider theme={theme}>
                <Window style={{maxWidth: '350px'}}>
                    <WindowHeader className="window-title">
                        <span>{title}</span>
                    </WindowHeader>
                    <WindowContent style={{padding: '0.25rem'}}>
                        <ScrollView>
                            <img className="gallery-image" src={image} alt='me.exe' />
                        </ScrollView>
                    </WindowContent>
                </Window>
            </ThemeProvider>
        </div>
    )

}

export default GalleryProp