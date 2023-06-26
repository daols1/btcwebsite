import React, { useState } from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.png'
import {CgMenuRightAlt, CgClose} from 'react-icons/cg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from '../../redux/features/authSlice';
import {  onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import { app } from '../../utils/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function NavBar() {
  
  const [nav, setNav] = useState(false)
  
  const navHandler = () => {
    setNav(!nav)
  }

  const dispatch = useDispatch()

  // Logic to check screen size
  const screenChcker = window.innerWidth >= 770 

  // is LoggedIn


  // let checker = false
  const logged = useSelector((state) => state.auth.value.displayName)
  // if (logged.length() !== 0) {
  //   check
  // }


  // Logic to check if 
  // Logged 
  const auth = getAuth(app)
  // const [checker, setChecker] = useState(true)
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in
  //     const uid = user.uid;
  //     // console.log(uid)
  //     setChecker(true)
  //     // console.log(checker)
  //     // ...
  //   } else {
  //     // User is signed out
  //     // console.log("You are not signed")
  //     setChecker(false)
  //     // console.log(checker)
  //     // ...
  //   }
  // });
  // console.log(checker)

  // Logout
  const logoutHandler = () => {
    signOut(auth).then(()=>{
      toaster('Bye bye 👋')
      dispatch(logOut())
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
  // const logoutCombine = () => {
  //   logged !== "John Doe" ? logoutHandler() : null
  //   // screenChcker ? setNav(!nav) : null
  // }


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
            logged !== "John Doe" ? <span>Logout</span> : <span>Login</span>
          }
          </Link>
          {
            logged === "John Doe" && <Link to='/signup' className='btn-glass'>Sign up</Link>
          }
          {
            logged !== "John Doe" && <Link to='/profile' className='btn-glass'>Profile</Link>
          }
      </div>
    </div>
    :
    // For mobile menu
    <div className='navbar-mobile container'>
      <img src={logo} alt=""/>
      {
        !nav === true ?
      <div 
      className='hamburger'
      ><CgMenuRightAlt 
      size={30} color='#fff' 
      onClick={() => navHandler()}/>
      </div>
      :
      <div 
      className='hamburger'
      ><CgClose
      size={30} color='#fff' 
      onClick={() => navHandler()}/>
      </div>
      }
      <div 
      className='mobile-nav-wrapper'
      // whileInView={{
      //   height: '100vh',
      // }}
      // transition={{
      //   duration:0.2,
      // }}
      style = {{
        display: !nav ? 'none' : 'block' ,
        height: !nav ? '0vh': '100vh',
      }}
      >
        <div className='mobile-nav-list'>
          <li><Link to='/' onClick={() => setNav(!nav)}> Functions </Link></li>
          <li><Link to='/wallets' onClick={() => setNav(!nav)}> Wallets </Link></li>
          <li><Link to='/blog' onClick={() => setNav(!nav)}> Blog </Link></li>
          <li><Link to='/shop' onClick={() => setNav(!nav)}> Shop </Link></li>
          <li><Link to='/' onClick={() => setNav(!nav)}> News </Link></li>
          <li><Link to='/' onClick={() => setNav(!nav)}> About BTCA </Link></li>
          <li>
            <Link 
              onClick={() => {
                setNav(!nav)
              }}
              className='btn-glass'
              to='/login'>
              {logged !== "John Doe" ? <span onClick={() => logoutHandler()}>Logout</span> : <span>Login</span>}
            </Link>
          </li>
          <li
          onClick={() => {
            setNav(!nav)
          }}
          >
            {logged !== "John Doe" && <Link to='/profile' className='btn-glass'>Profile</Link>}
          </li>
          <li>
          {
            logged === "John Doe" && <Link to='/signup' className='btn-glass'>Sign up</Link>
          }
          </li>
        </div>
      </div>
    </div>
    }
  </>
  )
}

export default NavBar