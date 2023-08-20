import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>read about my latest adventures!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/pinkflower.JPG"
                    text="Exploring a hidden trail in Santa Cruz"
                    label="secrets"
                    path="/adventures"
                    />
                    <CardItem 
                    src="images/yosemite.JPG"
                    text="Hiking to the top of waterfalls in Yosemite"
                    label="adventure"
                    path="/adventures"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/boat.jpg"
                    text="Pedal boating through Golden Gate Park"
                    label="relaxation"
                    path="/adventures"
                    />
                    <CardItem 
                    src="images/city.JPG"
                    text="Views of the city from Communication Hills"
                    label="stargazing"
                    path="/adventures"
                    />
                    <CardItem 
                    src="images/beach.jpg"
                    text="Picnic on the beach"
                    label="day trips"
                    path="/adventures"
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
