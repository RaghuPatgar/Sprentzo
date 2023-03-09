import React from "react";  
import './index.css';

function SignButton (){
    return (
        <div className="signbutton-container">
             <button className="btn btn-primary">Sign Up</button>
             <button className="btn btn-success">Log In</button>
        </div>

    );
}
export default SignButton;