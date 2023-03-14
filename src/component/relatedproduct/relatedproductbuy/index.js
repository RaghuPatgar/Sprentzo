import React from "react";
import './index.css';
import vollyball from '../relatedproductbuy/images/vball.png';
import ball from '../relatedproductbuy/images/ball.png';
import helmet from '../relatedproductbuy/images/helmet.png';
import shoe from '../relatedproductbuy/images/shoes.png';
import tennis from '../relatedproductbuy/images/batm.png';
import jersey from '../relatedproductbuy/images/jersy.png';


let NewBuyProductData = [
    {
        image: vollyball,
        title: 'Vollyball',
        buy: 'Buy 000',
        rent: 'Rent ₹120',
    },
    {
        image: ball,
        title: 'Sports Ball',
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
        rent: 'Buy 1800',
        
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
function RelatedBuyProduct() {
    return (
        <>
            <div className="related-buy-product-container">
                {NewBuyProductData.map((d, i) => (
                    <div className="related-buy-product-block">
                        <div className="related-buy-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="related-buy-product-title">{d.title}</div>
                        <div className="related-buy-product-price">
                            <div className="related-buy-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="related-buy-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RelatedBuyProduct;