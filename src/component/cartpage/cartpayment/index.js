import React from "react";
import './index.css';

// let CartPaymentData = [
//     {
//         items : '2 items',
//         dcharge : 120,
//         total : 2000,
//     }
// ]


function CartPayment() {
    return (
            <div className="cart-payment-title-container">

                <div className="cart-payment-title">Payment summary</div>

                {/* {CartPaymentData.map((d, i) => ( */}
                <div className="cart-payment-title-block">
                    <div className="cart-payment-items">
                        <div className="cart-payment-item">2 items</div>
                        <div className="cart-payment-price">₹1,320</div>
                    </div>
                    <div className="cart-payment-items">
                        <div className="cart-payment-item">Delivery Charge</div>
                        <div className="cart-payment-price">₹100</div>
                    </div>
                    <div className="cart-payment-total">
                        <div className="cart-payment-item">Total</div>
                        <div className="cart-payment-price">₹1,420</div>
                    </div>
                    <div className="cart-payment-button">
                        <button type="checkout"
                            onClick={(e) => {

                                alert("items checkout");
                            }}
                        >
                            Checkout</button>
                    </div>
                </div>

                {/* ))} */}
            </div>
    )
}

export default CartPayment;