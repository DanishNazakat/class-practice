import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route , Link} from "react-router";
import About from './pages/about';
import Home from './pages/home';
import Navbar from './pages/navbar';
import Signup from './pages/signup';
function App() {

  return (
    <div>
     <Navbar />
      <Routes>
        <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App
