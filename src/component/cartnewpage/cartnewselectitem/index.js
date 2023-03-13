import React from "react";
import './index.css';
import football from '../cartnewselectitem/ftball.png';
import plus from '../cartnewselectitem/plus.png';
import minus from '../cartnewselectitem/minus.png';


let CartProductData = [
    {
        image: football,
        title: 'Football',
        buy: 'Rent ₹120',
        item : '1',
    },
    // {
    //     image : gym,
    //     title :'Gym home workout',
    //     buy: 'Rent ₹1200',
    //     item : '1',
    // }
]

function CartSelectNewItems() {
    return (
        <div className="cart-select-new-item-container">
            {CartProductData.map((d, i) => (
                <div className="cart-select-new-item-block">
                    <div className="cart-select-new-item-image">
                        <img src={d.image} alt="" width={60} height={60} />
                    </div>
                    <div className="cart-select-new-items">
                        <div className="cart-select-new-item-title">{d.title}</div>
                        <div className="cart-select-new-item-price">{d.buy}</div>
                    </div>
                    <div className="cart-select-new-item-no">
                        <div className="cart-select-new-decrease">
                        <img src={minus} alt="" width={20} height={20} />
                        </div>
                        <div className="cart-select-new-number">{d.item}</div>
                        <div className="cart-select-new-increase">
                        <img src={plus} alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartSelectNewItems;