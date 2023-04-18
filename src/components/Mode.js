import React,{useState} from 'react';
import './Mode.css';
import img1 from './pink.png';
import img2 from './green.png';
import img3 from './dark.png';
import img4 from './light.png';
export default function Mode(props){
    
    function pink(){
        props.changeMode('pink');
        props.showAlert("Pink-Dark mode on");
    }
    function green(){
        props.changeMode("green");
        props.showAlert("Green-Dark mode on");
    }
    function black(){
        props.changeMode("black");
        props.showAlert("Dark mode on");
    }
    function light(){
        props.changeMode("light");
       props.showAlert("Light mode on");
    }
    return(
        <div className='modes'>
            <div className='modesDiv'>
                <img src={img1} alt="Pink" onClick={pink}/>
            </div>
            <div className='modesDiv'>
                <img src={img2} alt="Green" onClick={green}/>
            </div>
            <div className='modesDiv'>
                <img src={img3} alt="Black" onClick={black}/>
            </div>
            <div className='modesDiv'>
                <img src={img4} alt="light" onClick={light}/>
            </div>
         {/*  
            <div className="form-check form-switch">
                <input className="form-check-input modesDiv" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode} value="off"/>
            </div>
         */}
        </div>
    );
}