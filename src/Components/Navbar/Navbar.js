import React from 'react'
import "./Navbar.css"
import Logo from "../../Assets/Logo.png"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='Nav'>
      <nav className='Logo'>
        <img src={Logo} />
      </nav>
      <ul>
        <li className='home-list'>
          <Link to="/" className='Home'> Home </Link>
        </li>
        <li>
          <Link to="/Contact" >Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar