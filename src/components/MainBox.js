import React,{useState} from 'react';
import './MainBox.css';
export default function BOX(props){
    
    const [searchEle,setSearchEle]=useState("");
    const [text,setText]=useState("");

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
  
  return(
    <div style={props.Mode}>
        
   
        <div className='textbox' >
            <h2>Enter the text to analyse</h2>
            <textarea type="text" placeholder='enter text here' value={text} onChange={changeText} rows={10} cols={50} className='textBox'></textarea>
            <div className='buttons'>
                <button disabled={text.length==""} onClick={upper} style={props.Bmode}>Upper Case</button>
                <button disabled={text.length==""} onClick={lower} style={props.Bmode}>Lower Case</button>
                <button disabled={text.length==""} onClick={remove} style={props.Bmode}>Remove extra-space</button>
                <button disabled={text.length==""} onClick={copyText} style={props.Bmode}>Copy</button>
                <button disabled={text.length==""} onClick={clearText} style={props.Bmode}>Clear</button>
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
                <button disabled={text.length==""} onClick={search} style={props.Bmode}>Search</button>
            </div>
        </div>
        
    </div>
  );
}