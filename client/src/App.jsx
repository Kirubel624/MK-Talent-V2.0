import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './views/Landingpage'
import NavBar from './components/common/NavBar'

function App() {

  return (
    <div className='boder boder-purple-900 w-full'>
    <NavBar/>
    <Routes>
      <Route element={<Landingpage/>} path='/'/> 
    </Routes>
    </div>
  )
}

export default App
