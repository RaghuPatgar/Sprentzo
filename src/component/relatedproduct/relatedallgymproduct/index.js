import React from "react";
import './index.css';
import tytax from '../relatedallgymproduct/images/tytax.png';
import bumbelsset from '../relatedallgymproduct/images/dumbelsset.png';
import homegym from '../relatedallgymproduct/images/homgym.png';
import abdomen from '../relatedallgymproduct/images/abdomen.png';
import tredmil from '../relatedallgymproduct/images/tredmil.png';
import bumbels from '../relatedallgymproduct/images/dumbels.png';


let NewAllGymProductData = [
    {
        image: tytax,
        title: 'TYTAX Machine',
        buy: 'Buy 28000',
        rent: 'Rent ₹1200',
    },
    {
        image: bumbelsset,
        title: 'Dumbbells sets',
        buy: 'Buy 40000',
        rent: 'Rent ₹800',
    },
    {
        image: homegym,
        title: 'Home gym Equipment',
        buy: 'Buy 800',
        rent: 'Rent ₹120',
    },
    {
        image: abdomen,
        title: 'Abdomen Training',
        buy: 'Buy 10000',
        rent: 'Rent ₹1500'
        
    },
    {
        image: tredmil,
        title: 'Treadmill',
        rent: 'Buy ₹2800',
    },
    {
        image: bumbels,
        title: 'Dumbbells',
        rent: 'Buy ₹1500',

    },

]
function RelatedAllGymProduct() {
    return (
        <>
            <div className="related-all-gym-product-container">
                {NewAllGymProductData.map((d, i) => (
                    <div className="related-all-gym-product-block">
                        <div className="related-all-gym-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="related-all-gym-product-title">{d.title}</div>
                        <div className="related-all-gym-product-price">
                            <div className="related-all-gym-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="related-all-gym-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RelatedAllGymProduct;