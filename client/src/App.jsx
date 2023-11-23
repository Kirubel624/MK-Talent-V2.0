import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './views/Landingpage'
import NavBar from './components/common/NavBar'
import axios from 'axios';
import api from './api/api';
import {useDispatch} from 'react-redux';
import { login } from './redux/auth/authSlice';
function App() {
// const [count, setCount] = useState(0);
const dispatch = useDispatch();
let c = 0

console.log("app ------------")

async function  clickMe(){
  const data = await api.get('/auth')
  console.log("data",data)
}
const loginHandler = async()=>{
  const res = dispatch(login({}))
}
  return (
    <div className='boder boder-purple-900 w-full'>
    <NavBar/>
    <Routes>
      <Route element={<Landingpage/>} path='/'/> 
    </Routes>
    {/* <div>
        <button onClick={clickMe} >Click me</button>
        <button onClick={loginHandler} >login</button>
      

        </div> */}
    </div>
  )
}

export default App
