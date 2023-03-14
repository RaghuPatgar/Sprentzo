import React from "react";
import './index.css';
import badminton from '../relatedallsportsproduct/images/batm4.png';
import badmintonset from '../relatedallsportsproduct/images/batm6.png';
import badmintonset1 from '../relatedallsportsproduct/images/batm2.png';
import racket from '../relatedallsportsproduct/images/racket.png';
import badminton2 from '../relatedallsportsproduct/images/batm8.png';
import shuttle from '../relatedallsportsproduct/images/shuttle.png';


let NewAllSportsProductData = [
    {
        image: badminton,
        title: 'Badminton sets',
        buy: 'Buy 800',
        rent: 'Rent ₹80',
    },
    {
        image: badmintonset,
        title: 'Badminton sets',
        buy: 'Buy 400',
        rent: 'Rent ₹80',
    },
    {
        image: badmintonset1,
        title: 'Badminton sets',
        buy: 'Buy 1800',
        rent: 'Rent ₹120',
    },
    {
        image: racket,
        title: 'Badminton sets',
        rent: 'Buy ₹800',
    },
    {
        image: badminton2,
        title: 'Badminton sets',
        buy: 'Buy 800',
        rent: 'Rent ₹150',
    },
    {
        image: shuttle,
        title: 'shuttlecock',
        buy: 'Buy 800',
        rent: 'Rent ₹800',
    },
    
]
function RelatedAllSportsProduct() {
    return (
        <>
            <div className="related-all-sports-product-container">
                {NewAllSportsProductData.map((d, i) => (
                    <div className="related-all-sports-product-block">
                        <div className="related-all-sports-product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="related-all-sports-product-title">{d.title}</div>
                        <div className="related-all-sports-product-price">
                            <div className="related-all-sports-price1">{d.buy}
                                {/* Buy <br></br> 000 */}
                            </div>
                            <div className="related-all-sports-price2">{d.rent}
                                {/* Rent <br></br> ₹120 */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RelatedAllSportsProduct;