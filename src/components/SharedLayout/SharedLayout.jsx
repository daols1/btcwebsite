import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'

function SharedLayout() {
  return (
    <div>
        <NavBar />
            <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout
