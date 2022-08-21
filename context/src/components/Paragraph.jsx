import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Paragraph() {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <p className={theme}>
                Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter
            </p>
        </div>
    );
}

export default Paragraph;