import '../App.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const MainLayout = () => {
  return (
    <div className="mainLayout flex">
        <Header/>
        <Outlet />
    </div>

  )
}

export default MainLayout