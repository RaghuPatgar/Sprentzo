import React from "react";
import './index.css';
import home from '../footer/home.png';
import search from '../footer/search.png';
import star from '../footer/star.png';
import cart from '../footer/cart.png';
import profile from '../footer/profile.png';


function FooterPage() {
    return (
        <div className="footer-container">
            <span className="f-logo">
                <img src={home} alt="sign-facebook" height="30" width="30" className="footer-logo" />
            </span>
            <span className="f-logo">
                <img src={search} alt="sign-facebook" height="30" width="30" className="footer-logo" />
            </span>
            <span className="f-logo">
                <img src={star} alt="sign-facebook" height="30" width="30" className="footer-logo" />
            </span>
            <span className="f-logo">
                <img src={cart} alt="sign-facebook" height="30" width="30" className="footer-logo" />
            </span>
            <span className="f-logo">
                <img src={profile} alt="sign-facebook" height="30" width="30" className="footer-logo" />
            </span>

        </div>

    );
}

export default FooterPage;