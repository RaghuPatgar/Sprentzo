import React from "react";
import './index.css';

let SearchListData = [
    {
        title: 'B',
        subtitle: 'Badminton  Baseball'
    },
    {
        title: 'C',
        subtitle: 'Cricket'
    },
    {
        title: 'F',
        subtitle: 'Frisbee  Football'
    },
    {
        title: 'T',
        subtitle: 'Table tennis  Tennis'
    },
]

function SearchList() {
    return (
        <>
            
            <div className="search-list-container">
                {SearchListData.map((d, i) => (
                    <div className="search-list-block">
                        <div className="search-list-title">{d.title}</div>
                        <div className="search-list-sub-title">{d.subtitle}</div>
                    </div>

                ))} 
            </div>
        </>
    );
}

export default SearchList;