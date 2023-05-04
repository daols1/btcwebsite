import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
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
