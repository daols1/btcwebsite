import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './utils/firebase.js'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from './redux/features/authSlice.js';
import './App.css'
import BlogDetail from './components/BlogDetail/BlogDetail'
import Loader from './components/Loader/Loader'
import SharedLayout from './components/SharedLayout/SharedLayout'
import './main.scss'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Wallets from './pages/Wallets/Wallets'
import SingnUp from './pages/SingnUp/SingnUp'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

function App() {


  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  }, [])

  // Logout function
  
  // Logged in/Logged out function

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(`a User is signed in this is id ${uid}`)
      // ...
    } else {
      // User is signed out
      console.log("This user is no longer signed")
      // ...
    }
  });

  // User information is signed in
  const user = auth.currentUser;
  const dispatch = useDispatch()

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    dispatch(logIn(displayName))
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }



  

  return (
    <>{
      !isLoading?
    
    <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element= {<Home />} />
          <Route path='/wallets' element= {<Wallets />} />
          <Route path='/blog' element= {<Blog />} />
          <Route path='/blog/:blogId' element= {<BlogDetail />} />
          <Route path='/shop' element= {<Shop />} />
          <Route path='/signup' element= {<SingnUp />} />
          <Route path='/login' element= {<Login/>} />
          <Route path='/profile' element= {<Profile/>} />
        </Route>
      </Routes>
    </div>
    :
    <div><Loader /></div>
  }</>
      
  )
}

export default App
