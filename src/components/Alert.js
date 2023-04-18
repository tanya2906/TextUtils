import React from 'react';
import './Alert.css';
function Alert(props) {
  return (
    
    props.Al &&<div className='alertDiv' >
      {props.Al.msg} 
    </div>
    
    
  )
}

export default Alert;