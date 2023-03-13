import React from "react";
import './index.css';
import football from '../homeproductcard/ftball.png';
import gym from '../homeproductcard/gym.png';
import cricket from '../homeproductcard/cricket.png';


let ProductCardsData = [
    {
        image: football,
        title: 'Sports Equipment'
    },
    {
        image: gym,
        title: 'Gym Equipment'
    },
    {
        image: cricket,
        title: 'Cricket'
    }
]



function HomeProductCard() {
    return (
        <>
        <div className="home-product-cards-container">
            {ProductCardsData.map((d, i) => (
                
                    <div className="home-product-card-block">
                        <div className="product-image">
                            <img src={d.image} alt="" />
                        </div>
                        <div className="product-title">{d.title}</div>
                    </div>
            
            ))}
        </div>
        </>
    )
}

export default HomeProductCard;