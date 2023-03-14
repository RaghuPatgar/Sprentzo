import React from "react";
import './index.css';
import returnicon from '../wishlist/images/backicon.png';
import football from '../wishlist/images/football.png';
import string from '../wishlist/images/string.png';
import racket from '../wishlist/images/racket.png';


let CartProductData = [
    {
        image: football,
        title: 'Football',
        buy: 'Rent ₹120',
    },
    {
        image: string,
        title: 'Badminton string',
        buy: 'Buy ₹100',
    },
    {
        image: racket,
        title: 'shuttlecock',
        buy: 'Buy ₹100',
    }
]

function WishList() {
    return (
        <>
            <div className="wishlist-header-container">
                <div className="wishlist-header-icon">
                    <img src={returnicon} alt='' />
                </div>
                <div className="wishlist-header-title">Wishlist</div>
            </div>
            <div className="wishlist-select-item-container">
                {CartProductData.map((d, i) => (
                    <div className="wishlist-select-item-block">
                        <div className="wishlist-select-item-image">
                            <img src={d.image} alt="" width={104} height={104} />
                        </div>
                        <div className="wishlist-select-items">
                            <div className="wishlist-select-item-title">{d.title}</div>
                            <div className="wishlist-select-item-price">{d.buy}</div>
                            <div className="wishlist-add-button">
                                <button type="add"
                                    onClick={(e) => {

                                        alert("Added ro Bag");
                                    }}
                                >
                                    Add To Bag</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default WishList;