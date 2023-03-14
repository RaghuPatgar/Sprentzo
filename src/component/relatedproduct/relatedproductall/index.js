import React from "react";
import './index.css';
import ftball from '../relatedproductall/images/ftball.png';
import kneepad from '../relatedproductall/images/knee.png';
import helmet from '../relatedproductall/images/helmet.png';
import shoe from '../relatedproductall/images/shoe.png';
import tennis from '../relatedproductall/images/batm.png';
import jersey from '../relatedproductall/images/jersy.png';


let NewAllProductData = [
    {
        image: ftball,
        title: 'Football',
        buy: 'Buy 000',
        rent: 'Rent ₹120',
    },
    {
        image: kneepad,
        title: 'Sports Knee Cap',
        buy: 'Buy 400',
        rent: 'Rent ₹80',
    },
    {
        image: helmet,
        title: 'Water sports Helmet',
        buy: 'Buy 800',
        rent: 'Rent ₹120',
    },
    {
        image: shoe,
        title: 'Sports Shoes',
        rent: 'Buy 800',
        
    },
    {
        image: tennis,
        title: 'Tennis Bat',
        buy: 'Buy 1000',
        rent: 'Rent ₹120',
    },
    {
        image: jersey,
        title: 'Sports Knee Cap',
        rent: 'Buy 500',

    },

]
function RelatedAllProduct() {
    return (
        <>
            <div className="related-all-product-container">
                {NewAllProductData.map((d, i) => (
                    <div className="related-all-product-block">
                        <div className="related-all-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="related-all-product-title">{d.title}</div>
                        <div className="related-all-product-price">
                            <div className="related-all-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="related-all-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RelatedAllProduct;