import './App.css';
import NavBar  from './components/NavBar';
import MainBox from './components/MainBox';
import Alert from './components/Alert'; 
import { useState } from 'react';
import About from './components/About';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Mode from './components/Mode';
function App() {
  const [Al,setAlert]=useState(null);
  function showAlert(message) {
    setAlert({
      msg:message
    });
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const [mode,setMode]=useState(
        {
            transition: "background-color 2s",
            transition: "color 2s",
            backgroundColor:"white",
            color:"black"
            
        }
    );
  const [Bmode,setBMode]=useState(
        {
            color:"black"
        }
    );
  function changeMode(color) {
    if(color==='pink'){
      setMode(
        {
          transition: "background-color 2s",
          transition: "color 2s",
          backgroundColor:"#2A1836",
          color:"#CE0785"
        }
      );
      setBMode(
        {
          color:"#CE0785",
        }
      );
    }
    else if(color==="green"){
      setMode(
        {
          transition: "background-color 2s",
          transition: "color 2s",
          backgroundColor:"#192C26",
          color:"#07CE92"
        }
      );
      setBMode(
        {
          color:"#07CE92",
        }
      );
    }
    else if(color==="black"){
      setMode(
        {
          transition: "background-color 2s",
          transition: "color 2s",
          backgroundColor:"rgb(31, 33, 33)",
          color:"white"
        }
      );
      setBMode(
        {
          color:"white",
        }
      );
    }
    else{
      setMode(
        {
          transition: "background-color 2s",
          transition: "color 2s",
          backgroundColor:"white",
          color:"black"
        }
      );
      setBMode(
        {
          color:"black"  
        }
      );}
  }
  return (
    <>
    <Router>
    <NavBar title="TextUtils"/>
    <Alert Al={Al}/>
    <Mode changeMode={changeMode} showAlert={showAlert}/>
    
    <Routes>
      <Route path="/about" element={<About Mode={mode}  />} />
      <Route path="/home" element={<MainBox showAlert={showAlert} Mode={mode} Bmode={Bmode}  />} />
      <Route path="/" element={<MainBox showAlert={showAlert} Mode={mode} Bmode={Bmode}  />} />
      
    </Routes>
    
    
    </Router>
    </>
  );
}

export default App;
