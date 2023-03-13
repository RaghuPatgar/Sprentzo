import React from "react";
import './index.css';
import sprentzo from "./logo.png";

var rootStyle = {
    backgroundColor : '#E15456',
    // color : 'white',
    height : '100%'
  
  }

function Sprentzologo() {
    return (
        <>
        <div className="logo-container" style={rootStyle}>
        <img src={sprentzo} alt="sprentzoimg" className="logo" />
            
        </div>
        </>
      
    );
}
export default Sprentzologo;