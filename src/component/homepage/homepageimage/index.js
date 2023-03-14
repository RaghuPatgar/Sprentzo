import React from "react";
import homeimg from '../homepageimage/image1.png';
import './index.css';


function HomePageImage () {
    return (
        <div className="home-page-image-container">
            <img src={homeimg} alt='homeimg' width='100%' />
        </div>

    );
}

export default HomePageImage;