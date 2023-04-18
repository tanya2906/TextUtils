import React,{useState} from 'react';
import './MainBox.css';
/*import img1 from './pink.png';
import img2 from './green.png';
import img3 from './dark.png';
import img4 from './light.png';*/
export default function BOX(props){
    
    const [searchEle,setSearchEle]=useState("");
    
  //  const [mode_value, setMode_value]=useState("off");
    const [text,setText]=useState("");
 /*   const [mode,setMode]=useState(
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
    */
    function search() {
        let ele=document.querySelector(".toSearch").value;
        let para=document.querySelector(".preview-text");
        setSearchEle(ele);
        
        if(searchEle!="")
        {    // to highlight searched content
            ele=ele.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
            let pattern=new RegExp(`${ele}`,"gi");
            para.innerHTML=para.textContent.replace(pattern,match=>`<mark>${match}</mark>`)
        }
        
      }
   /* function changeMode(){
        if(mode_value==="off"){
            setMode_value("on");
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
            props.showAlert("Dark mode on");
        }
        
        else if(mode_value==="on"){
            setMode_value("off");
            setMode(
                {
                    transition: "background-color 2s",
                    transition: "color 2s",
                    backgroundColor:"white",
                    color:"black"
                }
            )
            setBMode(
                {
                    color:"black"  
                }
            );
            props.showAlert("Light mode on");
        }
        
    }*/
    function upper() {
        let t=text.toUpperCase();
        setText(t);
        props.showAlert("Text change to upper case");
    }
    function lower() {
        let t=text.toLowerCase();
        setText(t);
        props.showAlert("Text change to lower case");
    }
    function changeText(e) {
        setText(e.target.value);
    }
    function remove() {
        let l=text.length;
        let textCopy='';
        for(let i=0; i<text.length; i++)
        {
            if(i==0 && text[i]==' ' )
            {
                continue;
            }
            else if(text[i]==' '&& text[i-1]==' ')
            {
                continue;
            }

            textCopy=textCopy+text[i];
        }
        setText(textCopy);
        props.showAlert("Remove extra space");
    }
    function countChar() {
        let cc=0;
        for(let i=0; i<text.length; i++)
        {
            if(text[i]!==' '&&text[i]!=='\n')
            {
                cc++;
            }
        }
        return cc;
    }
    function countWord() {
        let cw=0;
        if(text==="")
        cw=0;
        else{
            for(let i=0; i<text.length; i++)
            {
                
                if(i===0 && (text[i]!==' ' ||text[i]!=='\n'))
                {
                    cw++;
                }
                else if((text[i]!==' ' ||text[i]!=='\n') && (text[i-1]===' ' || text[i-1]==='\n') && i>0)
                {
                    cw++;
                }
                if(text[i]==='\n'&& text[i-1]===' ')
                {
                    cw--;
                }
                if(text[i]===' '&& text[i-1]===' ')
                {
                    cw--;
                }
                if(text[i]==='\n'&& text[i-1]==='\n')
                {
                    cw--;
                }
                if(text[i]===' '&& text[i-1]==='\n')
                {
                    cw--;
                }
            }
        }
        
        return cw;
    }
    function clearText() {
        setText("");
        props.showAlert("Clear text");
    }
    function copyText() {
        let text_box=document.querySelector(".textBox");
        text_box.select();
        navigator.clipboard.writeText(text_box.value);
        props.showAlert("Copy text");
    }
  /*  function pink(){
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
        props.showAlert("Pink-Dark mode on");
    }
    function green(){
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
        props.showAlert("Green-Dark mode on");
    }
    function black(){
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
        props.showAlert("Dark mode on");
    }
    function light(){
        setMode(
            {
                transition: "background-color 2s",
                transition: "color 2s",
                backgroundColor:"white",
                color:"black"
            }
        )
        setBMode(
            {
                color:"black"  
            }
        );
        props.showAlert("Light mode on");
    }*/
  return(
    <div style={props.Mode}>
        {/*  <div className='modes'>
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
         
            <div className="form-check form-switch">
                <input className="form-check-input modesDiv" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={changeMode} value="off"/>
            </div>
         
        </div>
       */}
   
        <div className='textbox' >
            <h2>Enter the text to analyse</h2>
            <textarea type="text" placeholder='enter text here' value={text} onChange={changeText} rows={10} cols={50} className='textBox'></textarea>
            <div className='buttons'>
                <button onClick={upper} style={props.Bmode}>Upper Case</button>
                <button onClick={lower} style={props.Bmode}>Lower Case</button>
                <button onClick={remove} style={props.Bmode}>Remove extra-space</button>
                <button onClick={copyText} style={props.Bmode}>Copy</button>
                <button onClick={clearText} style={props.Bmode}>Clear</button>
            </div>
            <div className='summary'>
                <h2>Your text summary</h2>
                <p>{countWord()} words and {countChar()} characters</p>
                <p>{0.008*countWord()} minutes read</p>
                <h3>Preview</h3>
                <p className='preview-text'>{text}</p>
            </div>
            <div>
                <input type="text" placeholder="search" className='toSearch'/>
                <button onClick={search} style={props.Bmode}>Search</button>
            </div>
        </div>
        
    </div>
  );
}