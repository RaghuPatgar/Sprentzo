import React from "react";
import './index.css';
import crickit from '../searchproduct/crickit.png';
import gym from '../searchproduct/gymkit.png';
import brand from '../searchproduct/brands.png';


let NewProductCardsData = [
    {
        // bgcolor : '#E15456',
        title : 'Sports',
        image: crickit,
    },
    {
        // bgcolor : '#E15456',
        title : 'Equipment or accessory',
        image: gym,
    },
    {
        // bgcolor : '#E15456',
        title : 'Brands',
        image: brand,
    },
]


function SearchProduct() {
    return (
        <>
            <div className="search-product-cards-container">
                {NewProductCardsData.map((d, i) => (
                    <div className="search-product-card-block">
                        <div className="search-product-container"> {}
                        <div className="search-product-name">{d.title}</div>
                        <div className="search-product-image"> 
                            <img src={d.image} alt="" />
                        </div>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export default SearchProduct;