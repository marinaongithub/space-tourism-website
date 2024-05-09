import React from 'react'
import './destinations.css'
import planet from '../../assets/destination/image-moon.webp';

const Destinations = () => {
  return (
    <div className="destination flex ff-barlow">
      <section className="planet flex">
        <h2><span>01&nbsp;&nbsp;&nbsp;</span>PICK YOUR DESTINATION</h2>
        <figure>
          <img className="planetImg" src={planet} alt="the moon" width="445" height="445" ></img>
        </figure> 
      </section>   
      <section className="details flex">
        <nav>
          <ul className="planetList flex">
            <li>MOON</li>
            <li>MARS</li>
            <li>EUROPA</li>
            <li>TITAN</li>
          </ul>  
        </nav>
        <h3 className="ff-bellefair">MOON</h3>
        <p className="planetInfo">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
          regain perspective and come back refreshed. While you’re there, take in some history 
          by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        {/* <div className="break"></div> */}
        <div className="metrics flex">
          <div>
            <h4 >AVG. DISTANCE</h4>
            <p className="ff-bellefair">384,400 KM</p>
          </div>
          <div>
            <h4 >EST. TRAVEL TIME</h4>
            <p className="ff-bellefair">3 DAYS</p>
          </div>
        </div>
      </section>
    </div>    
  )
}

export default Destinations