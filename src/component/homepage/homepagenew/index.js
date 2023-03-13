import React from "react";
import './index.css';
import shoes from '../homepagenew/shoes.png';
import bat from '../homepagenew/batt.png';



let NewProductCardsData = [
    {
        image: shoes,
    }
]


function HomeNewProduct() {
    return (
        <>
            <div className="Home-product-title">New arrival and Best Selling</div>
            <div className="home-new-product-cards-container">
                {NewProductCardsData.map((d, i) => (
                    <div className="home-new-product-card-block">
                        <div className="new-product-image"> 
                            <img src={d.image} alt="" />
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default HomeNewProduct;