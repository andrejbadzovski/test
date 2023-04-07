import React from 'react';
import '../styles.css'

const Input = ({ id, label, name, value, onChange, hidden, description, type, errors}) => {
    return (
    <>
      <div className={hidden ? "hideInput inputGroup" : "inputGroup" } >
        <label htmlFor={name} >{label} </label>
        <input className='inputHeight' type={type} id={name} name={name} value={value} onChange={onChange}  />
        { errors && 
            <span className='errorMessage'>{errors}</span>
        }
          { hidden !== true && description && 
        <div>{description}</div>
        }
    
      </div>
     
   
   </>
    );
  };

export default Input;