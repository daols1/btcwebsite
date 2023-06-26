import React, {useState} from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'
import {CgMenuRightAlt, CgClose} from 'react-icons/cg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {  onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { app } from '../../utils/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NavBar() {
  
  const [nav, showNav] = useState(false)
  
  const navHandler = () => {
    showNav(!nav)
  }
  // Logic to check screen size
  const screenChcker = window.innerWidth >= 770 
  // Logged 
  const auth = getAuth(app)
  const [checker, setChecker] = useState(true)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      const uid = user.uid;
      // console.log(uid)
      setChecker(true)
      // console.log(checker)
      // ...
    } else {
      // User is signed out
      // console.log("You are not signed")
      setChecker(false)
      // console.log(checker)
      // ...
    }
  });
  // console.log(checker)

  // Logout
  const logoutHandler = () => {
    signOut(auth).then(()=>{
      toaster('Bye bye 👋')
    }).catch((error) => {
      toaster('Somthing happened try again 👴')
    })
  }

  // Toast
  const toaster = (msg) => {
    toast(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
  }

  // Logout combiner function
  const logoutCombine = () => {
    checker === true ? logoutHandler() : null
    // screenChcker ? showNav(!nav) : null
  }


  return (
    <>
    <ToastContainer />
      {
        screenChcker ? 
      
    
    
    <div className='navbar container'>
      <img src={logo} alt=""/>
        <ul className='nav-list'>
          <li><Link to='/'> Functions </Link></li>
          <li><Link to='/wallets'> Wallets </Link></li>
          <li><Link to='/blog'> Blog </Link></li>
          <li><Link to='/shop'> Shop </Link></li>
          <li><Link> News </Link></li>
          <li><Link> About BTCA </Link></li>
        </ul>
      <div>
        <Link 
          to='/login' 
          onClick={
            logoutCombine
          }
          className='btn-glass'>
          {
            checker === true ? <span>Logout</span> : <span>Login</span>
          }
          </Link>
          {
            checker === false && <Link to='/signup' className='btn-glass'>Sign up</Link>
          }
          {
            checker === true && <Link to='/profile' className='btn-glass'>Profile</Link>
          }
      </div>
    </div>
    :
    // For mobile menu
    <div className='navbar-mobile container'>
      <img src={logo} alt=""/>
      {
        !nav === true ?
          <motion.div 
      className='hamburger'
      whileTap={{
        scale:.8,
      }}
      ><CgMenuRightAlt 
      size={30} color='#fff' 
      onClick={() => navHandler()}/>
      </motion.div>
      :
      <motion.div 
      className='hamburger'
      whileTap={{
        scale:.8,
      }}
      ><CgClose
      size={30} color='#fff' 
      onClick={() => navHandler()}/>
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
          <li><Link to='/shop' onClick={() => showNav(!nav)}> Shop </Link></li>
          <li><Link to='/' onClick={() => showNav(!nav)}> News </Link></li>
          <li><Link to='/' onClick={() => showNav(!nav)}> About BTCA </Link></li>
          <li><Link 
            onClick={() => {
              showNav(!nav)
              logoutCombine()
            }}
            className='btn-glass'
            to='/login'
            >
            {checker === true ? <span>Logout</span> : <span>Login</span>}
            {/* {
              checker === true && 'Logout'
            }
            {
              checker === false && 'Login'
            } */}
          </Link></li>
          <li>
          {
            checker === false && <Link to='/signup' className='btn-glass'>Sign up</Link>
          }
            
            {/* <Link to='/signup' onClick={() => showNav(!nav)} className='btn-glass'>Sign up</Link> */}
          </li>
          {/* <li><Link to='' onClick={logoutHandler()} className='btn-glass'>Logout</Link></li> */}
        </div>
      </motion.div>
    </div>
    }
  </>
  )
}

export default NavBar