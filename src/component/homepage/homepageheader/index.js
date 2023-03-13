import React from "react";
import sprentzo from '../homepageheader/logo1.png';
import maplogo from '../homepageheader/map.png';
import './index.css'

function HomePageHeader (){
    return(
        <div className="homepage-header">
             <img src={sprentzo} alt="sprentzoimg" className='home-logo-image'/>
             <div className="header-location">
                <div className="location-title">M G Road</div>
                <img src={maplogo} alt="mapicon" className='home-map-image'/>
             </div>
        </div>
    );
}

export default HomePageHeader;