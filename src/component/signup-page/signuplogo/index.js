import React from "react";
import sprentzo from '../signuplogo/logo1.png';
import './index.css'

function SignupPageLogo (){
    return(
        <div className="signup-logo-image">
             <img src={sprentzo} alt="sprentzoimg" className='logo-image'/>
        </div>
    );
}

export default SignupPageLogo;