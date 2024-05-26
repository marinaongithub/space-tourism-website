import React from 'react'
import jsonData from '../../../data.json'
import { useState } from 'react'
import './Technology.css'

const Technology = () => {

    const techData = jsonData.technology;
    const initialTech = techData[0];

    const [techSelected, setTechSelected] = useState(initialTech);

    const changeTechData = (event) => {
        event.preventDefault();
        const numClicked = event.currentTarget;
        const nums = document.querySelectorAll(".techList button");

        // convert the id into a number and get the corresponding planet Data
        setTechSelected(techData[Number(numClicked.id)]) 

        // Add the "selected" class only on the selected button 
        nums.forEach((btn) => btn == numClicked ? btn.className = "selected bellefair" : btn.className = "bellefair");
    }


  return (
    <div className="techPage flex ff-barlow">
        <h2><span>03&nbsp;&nbsp;&nbsp;</span>SPACE LAUNCH 101</h2>
        <main className="tech flex">
            <picture>
                <img className="techImg" src={techSelected.images.landscape} alt="Space Technology"/>
            </picture>
            <section className="techInfo flex">
                <ul className="techList flex ff-bellefair">
                    <li>
                        <button id="0" className="selected" onClick={changeTechData}>1</button>
                    </li>
                    <li>
                        <button id="1" onClick={changeTechData}>2</button>
                    </li>
                    <li>
                        <button id="2" onClick={changeTechData}>3</button>
                    </li>
                </ul>
                <div>
                    <p className="terminology">THE TERMINOLOGY...</p>
                    <p className="techName ff-bellefair">{techSelected.name}</p>
                    <p className="techDescription">{techSelected.description}</p>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Technology