import '../mainLayout.css'
import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header.jsx';


const MainLayout = () => {

  // const [backgroundImg, setbackgroundImg] = useState("homeBg");

  // useEffect

  const location = useLocation();
  console.log(location.pathname);

  const backgroundImg = location.pathname == "/destination" ? "destinationBg" : 
  location.pathname == "/crew" ? "crewBg" :
  location.pathname == "/technology" ? "technologyBg" :
  "homeBg"
  
  return (
    <div className={`mainLayout flex ${backgroundImg}`}>
        <Header />
        <Outlet />
    </div>

  )
}

export default MainLayout