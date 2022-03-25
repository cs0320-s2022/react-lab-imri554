import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props : {label : string, change : (value: string) => void}) {
  return (
    <div className="Horoscope">
      <header className="Horoscope-header">
      <label>{props.label}</label>
        <input type = {'text'} onChange={(event) => props.change(event.target.value)}>
        
        </input>
        
        </header>
    </div>
  );
}

export default TextBox;
