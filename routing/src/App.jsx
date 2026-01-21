import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route , Link} from "react-router";
import About from './pages/about';
import Home from './pages/home';
import Navbar from './pages/navbar';
function App() {

  return (
    <>
     <Navbar />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
