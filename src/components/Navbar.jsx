import React, { useState } from 'react'
import './Navbar.css'
import {NavLink, Link} from 'react-router-dom'

export default function Navbar() {

  const [cross, setCross] = useState(false)

  const handleClick = () => {
    setCross(!cross)
  }

  return (
    <nav className='navigation'>
      <div>
        <Link to='/'>
          <h1 className='company-name'>nazwa firmy</h1>
        </Link>
      </div>
      {cross &&<section className='navigation-wrapper'>
        <div className={cross ? "nav-links cross" : "nav-links"}>
          <NavLink exact to='/'>home</NavLink>
          <NavLink to='/offer'>oferta</NavLink>
          <NavLink to='/contact'>kontakt</NavLink>
          <NavLink to='/about'>o firmie</NavLink>
        </div>    
      </section>}
      <div className={cross ? "hamburger cross" : "hamburger"} onClick={handleClick}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}
