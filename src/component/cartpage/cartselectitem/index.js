import React from "react";
import './index.css';
import football from '../cartselectitem/ftball.png';
import plus from '../cartselectitem/plus.png';
import minus from '../cartselectitem/minus.png';
import gym from '../cartselectitem/gym.png';


let CartProductData = [
    {
        image: football,
        title: 'Football',
        buy: 'Rent ₹120',
        item : '1',
    },
    {
        image : gym,
        title :'Gym home workout',
        buy: 'Rent ₹1200',
        item : '1',
    }
]

function CartSelectItems() {
    return (
        <div className="cart-select-item-container">
            {CartProductData.map((d, i) => (
                <div className="cart-select-item-block">
                    <div className="cart-select-item-image">
                        <img src={d.image} alt="" width={60} height={60} />
                    </div>
                    <div className="cart-select-items">
                        <div className="cart-select-item-title">{d.title}</div>
                        <div className="cart-select-item-price">{d.buy}</div>
                    </div>
                    <div className="cart-select-item-no">
                        <div className="cart-select-decrease">
                        <img src={minus} alt="" width={20} height={20} />
                        </div>
                        <div className="cart-select-number">{d.item}</div>
                        <div className="cart-select-increase">
                        <img src={plus} alt="" width={20} height={20} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartSelectItems;