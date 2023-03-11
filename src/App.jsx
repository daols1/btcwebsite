import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SharedLayout from './components/SharedLayout/SharedLayout'
import './main.scss'
import Home from './pages/Home/Home'
import Wallets from './pages/Wallets/Wallets'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element= {<Home />} />
          <Route path='/wallets' element= {<Wallets />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
