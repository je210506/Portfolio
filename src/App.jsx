import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
function App(){
  

return (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);
}


export default App