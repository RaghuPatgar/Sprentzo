import React from "react";
import './index.css';
import ftball from '../homesimilarproduct/ftball.png';
import kneepad from '../homesimilarproduct/knee.png';


let NewSimilarProductData = [
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
        rent: 'REnt ₹80',
    },

]
function HomeSimilarProduct() {
    return (
        <>
            <div className="Home-similar-product-title">Similar Products </div>
            <div className="home-similar-product-container">
                {NewSimilarProductData.map((d, i) => (
                    <div className="home-similar-product-block">
                        <div className="home-similar-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="home-similar-product-title">{d.title}</div>
                        <div className="home-similar-product-price">
                            <div className="product-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="product-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomeSimilarProduct;