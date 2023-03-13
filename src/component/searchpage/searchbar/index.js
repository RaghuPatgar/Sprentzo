import React from "react";
import './index.css'
import searchicon from '../searchbar/search.png';
import removesearch from '../searchbar/history.png';


function HeaderSearchBar () {
    return (
        <div className='search-header-content'>
                <div className="search-box-container">
                    <div className='search'>
                        <img src={searchicon} alt="" width={30} height={30} />
                    </div>

                    <input type="text1" placeholder="Search here....." className="input"/>

                    <div className='remove-search'>
                        <img src={removesearch} alt="" width={30} height={30} />
                    </div>
                </div>
            </div>
    );
}

export default HeaderSearchBar;

