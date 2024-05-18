import React from 'react'
import jsonData from '../../../data.json'
import { useState } from 'react'
import './Crew.css'

const Crew = () => {

    const crewData = jsonData.crew;
    const initialCrewMember = crewData[0];

    const [crewMemberSelected, setcrewMemberSelected] = useState(initialCrewMember);

    const changeCrewData = (event) => {
        event.preventDefault();
        const dotClicked = event.currentTarget;
        const dots = document.querySelectorAll(".crewList button");

        // convert the id into a number and get the corresponding planet Data
        setcrewMemberSelected(crewData[Number(dotClicked.id)]) 

        // Add the "selected" class only on the selected button 
        dots.forEach((btn) => btn == dotClicked ? btn.className = "selected" : btn.className = "");
    }


  return (
    <div className="crew flex ff-barlow">
        <h2><span>02&nbsp;&nbsp;&nbsp;</span>MEET YOUR CREW</h2>
        <picture>
            <img className="crewImg" src={crewMemberSelected.images.webp} alt="Crew member" width="327" height="223"/>
        </picture>
        <ul className="crewList flex">
            <li>
                <button id="0" className="selected" onClick={changeCrewData}></button>
            </li>
            <li>
                <button id="1" onClick={changeCrewData}></button>
            </li>
            <li>
                <button id="2" onClick={changeCrewData}></button>
            </li>
            <li>
                <button id="3" onClick={changeCrewData}></button>
            </li>
        </ul>
        <section>
            <p className="role bellefair">{crewMemberSelected.role}</p>
            <p className="crewName bellefair">{crewMemberSelected.name}</p>
            <p className="bio">{crewMemberSelected.bio}</p>
        </section>
      
    </div>
  )
}

export default Crew