import React from 'react';
import './About.css';
import Mode from './Mode';
export default function About(props) {
    return(
        <>
        <div className='aboutDiv' style={props.Mode}>
            <h3>About</h3>
            <br/>
            <article>
                <strong>What is textUtils?</strong>
                <p>It is a tool that allows you to analyse a text 
                    by counting the number of words and characters 
                    present. It also provides information of reading time.
                    Our online text analyser / word counter is easy 
                    to use and free of charge.</p>
                <strong>How do I use it?</strong>
                <p>
                Our text analyzer is easy to use. Simply copy/paste 
                the text or type it into the input box, and then 
                click on Upper Case button to convert input text 
                into upper case. To convert input text into lower 
                case click on Lower Case button. Remove extra-space 
                button remove extra space. Copy button to copy input text.
                Clear button use to clear all text. Search button used 
                to search words. 
                </p>
            </article>
        </div>
        </>
    );
};
