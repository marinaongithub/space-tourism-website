import './Header.css';
import logo from '../../assets/shared/logo.svg';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink exact id="home" to="/" end ><span>00 &nbsp;</span> HOME</NavLink>
                </li>
                <li>
                    <NavLink exact id="destination" to="/destination" ><span>01 &nbsp;</span> DESTINATION</NavLink>
                </li>
                <li>
                    <NavLink exact id="crew" to="/crew" ><span>02 &nbsp;</span> CREW</NavLink>
                </li>
                <li>
                    <NavLink exact id="technology" to="/technology" ><span>03 &nbsp;</span> TECHNOLOGY</NavLink>
                </li>
            </ul>
        </nav>
      </header>
    );
}


  export default Header;