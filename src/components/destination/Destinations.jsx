import React from 'react'
import './destinations.css'
import jsonData from '../../../data.json'
import { useState } from 'react'

const Destinations = () => {

  const planetsData = jsonData.destinations;
  const initialPlanet = planetsData[0];

  const [planetSelected, setPlanetSelected] = useState(initialPlanet);
  console.log(planetSelected);

  const changePlanetData = (event) => {
    event.preventDefault();
    const buttonClicked = event.currentTarget;
    const buttons = document.querySelectorAll(".planetList button");
    console.log(buttons);

    // convert the id into a number and get the corresponding planet Data
    setPlanetSelected(planetsData[Number(buttonClicked.id)]) 
    console.log(planetSelected.name);
    console.log(buttonClicked.textContent);

    // Add the "selected" class only on the selected button 
    buttons.forEach((btn) => btn == buttonClicked ? btn.className = "selected" : btn.className = "");
    }

  return (
    <div className="destination flex ff-barlow">
      <section className="planet flex">
        <h2><span>01&nbsp;&nbsp;&nbsp;</span>PICK YOUR DESTINATION</h2>
        <picture>
          <img className="planetImg" src={planetSelected.images.webp} alt={planetSelected.name} width="445" height="445" ></img>
        </picture> 
      </section>   
      <section className="planetDetails flex">
        <nav>
          <ul className="planetList flex">
            <li>
              <button id="0" className="selected" onClick={changePlanetData}>{planetsData[0].name}</button>
            </li>
            <li>
              <button id="1" onClick={changePlanetData}>{planetsData[1].name}</button>
            </li>
            <li>
              <button id="2"  onClick={changePlanetData}>{planetsData[2].name}</button>
            </li>
            <li>
              <button id="3" onClick={changePlanetData}>{planetsData[3].name}</button>
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