import React from 'react'
import './destinations.css'
import jsonData from '../../../data.json'
import { useState } from 'react';

const Destinations = () => {

  const planetsData = jsonData.destinations;
  console.log(planetsData);
  const initialPlanet = planetsData[0];
  console.log(initialPlanet)

  const [planetSelected, setPlanetSelected] = useState(initialPlanet);
  console.log(planetSelected);

  const changePlanet = (event) => {
    event.preventDefault();
    const buttonClicked = event.currentTarget.id; // get the id of the button clicked which correspond to the index in the json data
    console.log(Number(buttonClicked));
    setPlanetSelected(planetsData[Number(buttonClicked)]); // convert the id into a number and get the corresponding planet Data
    console.log(planetSelected.images.webp);
  }

  return (
    <div className="destination flex ff-barlow">
      <section className="planet flex">
        <h2><span>01&nbsp;&nbsp;&nbsp;</span>PICK YOUR DESTINATION</h2>
        <figure>
          <img className="planetImg" src={planetSelected.images.webp} alt={planetSelected.name} width="445" height="445" ></img>
        </figure> 
      </section>   
      <section className="details flex">
        <nav>
          <ul className="planetList flex">
            <li>
              <button id="0" onClick={changePlanet}>{planetsData[0].name}</button>
            </li>
            <li>
              <button id="1" onClick={changePlanet}>{planetsData[1].name}</button>
            </li>
            <li>
              <button id="2" onClick={changePlanet}>{planetsData[2].name}</button>
            </li>
            <li>
              <button id="3" onClick={changePlanet}>{planetsData[3].name}</button>
            </li>
          </ul>  
        </nav>
        <h3 className="ff-bellefair">{planetSelected.name}</h3>
        <p className="planetInfo">{planetSelected.description}
        </p>
        {/* <div className="break"></div> */}
        <div className="metrics flex">
          <div>
            <h4 >AVG. DISTANCE</h4>
            <p className="ff-bellefair">{planetSelected.distance}</p>
          </div>
          <div>
            <h4 >EST. TRAVEL TIME</h4>
            <p className="ff-bellefair">{planetSelected.travel}</p>
          </div>
        </div>
      </section>
    </div> 
  )
}

export default Destinations