import React from "react";
import './index.css';
import returnicon from '../cartheader/backicon.png';


function CartHeader (){
    return (
        <div className="cart-header-container">
            <div className="cart-header-icon">
                <img src={returnicon} alt='' />
            </div>
            <div className="cart-header-title">Cart</div>
            
        </div>
    );
}

export default CartHeader;