import React from "react";
import './index.css';
import tytax from '../relatedallgymproduct/images/tytax.png';
import bumbelsset from '../relatedallgymproduct/images/dumbelsset.png';
import homegym from '../relatedallgymproduct/images/homgym.png';
import abdomen from '../relatedallgymproduct/images/abdomen.png';
import tredmil from '../relatedallgymproduct/images/tredmil.png';
import weight from '../relatedallgymproduct/images/weight.png';


let NewBuyGymProductData = [
    {
        image: tredmil,
        title: 'Treadmill',
        rent: 'Buy ₹2800',
    },
    {
        image: weight,
        title: 'weirder weight ',
        rent: 'Buy ₹1500',
    },
    // {
    //     image: homegym,
    //     title: 'Home gym Equipment',
    //     buy: 'Buy 800',
    //     rent: 'Rent ₹120',
    // },
    // {
    //     image: abdomen,
    //     title: 'Abdomen Training',
    //     buy: 'Buy 10000',
    //     rent: 'Rent ₹1500'
        
    // },
    // {
    //     image: tredmil,
    //     title: 'Treadmill',
    //     rent: 'Buy ₹2800',
    // },
    // {
    //     image: bumbels,
    //     title: 'Dumbbells',
    //     rent: 'Buy ₹1500',

    // },

]
function RelatedBuyGymProduct() {
    return (
        <>
            <div className="related-buy-gym-product-container">
                {NewBuyGymProductData.map((d, i) => (
                    <div className="related-buy-gym-product-block">
                        <div className="related-buy-gym-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="related-buy-gym-product-title">{d.title}</div>
                        <div className="related-buy-gym-product-price">
                            <div className="related-buy-gym-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="related-buy-gym-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RelatedBuyGymProduct;