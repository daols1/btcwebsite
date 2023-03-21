import React, {useState} from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'
import {CgMenuRightAlt, CgClose} from 'react-icons/cg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


function NavBar() {

  const [nav, showNav] = useState(false)

  const navHandler = () => {
    showNav(!nav)
  }

  // Logic to check screen size
  
  const screenChcker = window.innerWidth >= 770 

  // const style = {
  //   display: 
  // }


  return (
    <>
      {
        screenChcker ? 
      
    
    
    <div className='navbar container'>
      <img src={logo} alt=""/>
        <ul className='nav-list'>
          <li><Link to='/'> Functions </Link></li>
          <li><Link to='/wallets'> Wallets </Link></li>
          <li><Link to='/blog'> Blog </Link></li>
          <li><Link> Resources </Link></li>
          <li><Link> News </Link></li>
          <li><Link> About BTCA </Link></li>
        </ul>
      <div>
        <Link className='btn-glass'>RUS</Link>
        <Link className='btn-glass'>⭕10.864</Link>
      </div>
    </div>
    :
    // For mobile menu
    <div className='navbar-mobile container'>
      <img src={logo} alt=""/>
      {
        !nav ?
          <motion.div 
      className='hamburger'
      whileTap={{
        scale:.8,
      }}
      ><CgMenuRightAlt 
      size={30} color='#fff' 
      onClick={navHandler}/>
      </motion.div>
      :
      <motion.div 
      className='hamburger'
      whileTap={{
        scale:.8,
      }}
      ><CgClose
      size={30} color='#fff' 
      onClick={navHandler}/>
      </motion.div>
      }
      <motion.div 
      className='mobile-nav-wrapper'
      whileInView={{
        height: '100vh',
      }}
      // transition={{
      //   duration:0.2,
      // }}
      style = {{
        display: !nav ? 'none' : 'block',
        height: !nav ? '0vh': '100vh',
      }}
      >
        <div className='mobile-nav-list'>
          <li><Link to='/' onClick={() => showNav(!nav)}> Functions </Link></li>
          <li><Link to='/wallets' onClick={() => showNav(!nav)}> Wallets </Link></li>
          <li><Link to='/blog' onClick={() => showNav(!nav)}> Blog </Link></li>
          <li><Link to='/' onClick={() => showNav(!nav)}> Resources </Link></li>
          <li><Link to='/' onClick={() => showNav(!nav)}> News </Link></li>
          <li><Link to='/' onClick={() => showNav(!nav)}> About BTCA </Link></li>
        </div>
      </motion.div>
    </div>
    }
  </>
  )
}

export default NavBar