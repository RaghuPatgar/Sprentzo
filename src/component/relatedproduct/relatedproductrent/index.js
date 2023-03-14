import React from "react";
import './index.css';
import ftball from '../relatedproductrent/images/ftball.png';
import kneepad from '../relatedproductrent/images/knee.png';
import helmet from '../relatedproductrent/images/helmet.png';
import shoe from '../relatedproductrent/images/shoe.png';
import tennis from '../relatedproductrent/images/batm.png';
import vallyball from '../relatedproductrent/images/vball.png';


let NewRentProductData = [
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
        image: vallyball,
        title: 'Sports Ball',
        rent: 'Buy 500',

    },

]
function RelatedRentProduct() {
    return (
        <>
            <div className="related-rent-product-container">
                {NewRentProductData.map((d, i) => (
                    <div className="related-rent-product-block">
                        <div className="related-rent-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="related-rent-product-title">{d.title}</div>
                        <div className="related-rent-product-price">
                            <div className="related-rent-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="related-rent-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RelatedRentProduct;