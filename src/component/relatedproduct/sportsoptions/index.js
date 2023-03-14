import React from "react";
import './index.css';
import football from '../sportsoptions/images/ftball.png';
import gym from '../sportsoptions/images/gym.png';
import cricket from '../sportsoptions/images/cricket.png';
import dumbbles from '../sportsoptions/images/dumbels.png';
import yogaball from '../sportsoptions/images/yogab.png';


let SportsCardsData = [
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
    },
    {
        image: dumbbles,
        title: 'Cricket'
    },
    {
        image: yogaball,
        title: 'Cricket'
    }
]


function SportsTypeOption (){
    return (
        <>
        <div className="sports-option-cards-container">
            {SportsCardsData.map((d, i) => (
                
                    <div className="sports-option-card-block">
                        <div className="sports-option-image">
                            <img src={d.image} alt="" width={30} height={30} />
                        </div>
                        <div className="sports-option-title">{d.title}</div>
                    </div>
            
            ))}
        </div>
        </>
    );

}

export default SportsTypeOption;