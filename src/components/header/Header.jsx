import './Header.css';
import logo from '../../assets/shared/logo.svg'
import { useState } from 'react';

function Header() {
    
    const [isNavVisible, setNavVisible] = useState(false);

    const toggleMenu = () => {
        setNavVisible(!isNavVisible);
    };

    return (
      <header className="header flex">
        <img src={logo} alt="logo" width="40" height="40"/>
        <div className="line"></div>
        <button className={`mobile-nav-toggle ${isNavVisible ? 'close-icon' : ''}`} onClick={toggleMenu} aria-controls="nav-list">
            <span className="sr-only" aria-expanded={isNavVisible}>Menu</span></button>    
        <nav>
            <ul id="nav-list" className={`nav-list flex ff-barlow ${isNavVisible ? 'visible' : ''}`}>
                <li>
                    <a href="#"><span>00 &nbsp;</span> HOME</a>
                </li>
                <li>
                    <a href="#"><span>01 &nbsp;</span> DESTINATION</a>
                </li>
                <li>
                    <a href="#"><span>02 &nbsp;</span> CREW</a>
                </li>
                <li>
                    <a href="#"><span>03 &nbsp;</span> TECHNOLOGY</a>
                </li>
            </ul>
        </nav>
      </header>
    );
  }

  export default Header;