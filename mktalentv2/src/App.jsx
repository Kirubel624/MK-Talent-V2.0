import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './views/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route element={<Landingpage/>} path='/'/> 
    </Routes>
    </>
  )
}

export default App
