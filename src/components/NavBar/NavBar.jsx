import React from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar container'>
      <img src={logo} alt=""/>
        <ul className='nav-list'>
          <li>Functions</li>
          <li>Functions</li>
          <li>Functions</li>
          <li>Functions</li>
          <li>Functions</li>
          <li>Functions</li>
        </ul>
      <div>
        <Link>RUS</Link>
        <Link>10.64</Link>
      </div>
    </div>
  )
}

export default NavBar