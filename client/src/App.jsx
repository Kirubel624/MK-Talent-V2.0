import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Landingpage from './views/Landingpage'
import NavBar from './components/common/NavBar'
import SideBar from './components/common/SideBar'
import Homepage from './views/Homepage'

function App() {
const location =useLocation()
  return (
    <div className='boder boder-purple-900 w-full'>
 
   
   
    <Routes>
      <Route element={<><NavBar/><Landingpage/></> } path='/'/> 
      
      <Route element={<SideBar><Homepage/>  </SideBar>} path='/home'/> 

    
    </Routes> 
   
    </div>
  )
}

export default App
