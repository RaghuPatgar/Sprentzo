import React from "react";
import './index.css';

function HomepageBrowserButton (){
    return (
        <div className="Home-browser-button">
            <button type="click"
             onClick={(e) => {

                alert("message Sent");
            }}
            >
                Get a friend on-board, Get a month of supply</button>
        </div>

    );
}

export default HomepageBrowserButton;