import React from "react";
import './index.css';
import google from '../signup-social/google.png';
import facebook from '../signup-social/facebook.png';
import twitter from '../signup-social/twitter.png';



function SignupSocialimage() {
    return (
        <div className="signup-social-logo">
            <div style={{display: 'flex',
                        flexDirection: 'row',
                        marginTop:'30px'}}>
                <hr
                    style={{
                        background: '#E15456',
                        color: '#E15456',
                        borderColor: '#E15456',
                        height: '1px',
                        padding: '0px 145px 0px 20px',
                        marginLeft: '15px'
                    }}
                />OR 
                <hr
                    style={{
                        background: '#E15456',
                        color: '#E15456',
                        borderColor: '#E15456',
                        height: '1px',
                        padding: '0px 130px 0px 30px',
                        marginLeft: '15px'
                    }}
                /> 
            </div>
            <div className="social-app-container">
                <div className="sign-social-logo">
                    <span className="g-logo">
                        <img src={google} alt="sign-google" height="48" width="48" className="social-logo" />
                    </span>
                </div>
                <div className="sign-social-logo">
                    <span className="f-logo">
                        <img src={facebook} alt="sign-facebook" height="48" width="48" className="social-logo" />
                    </span>
                </div>
                <div className="sign-social-logo">
                    <span className="t-logo">
                        <img src={twitter} alt="sign-facebook" height="48" width="48" className="social-logo" />
                    </span>
                </div>

            </div>
        </div>

    );
}

export default SignupSocialimage;