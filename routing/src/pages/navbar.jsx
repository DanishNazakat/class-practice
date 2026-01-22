import React from 'react'
import {Link} from "react-router"

export default function Navbar (){
 
  return (
    <>         
    <nav>
        <Link to="/">Home page</Link>
      <Link to="/about">about page</Link> 
      <Link to="/services">services </Link> 
      </nav>
      </>
  )
}
