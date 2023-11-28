
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'

import api from './api/api';
import { useDispatch } from 'react-redux';
import { login } from './redux/auth/authSlice';
import AppRoute from './app-routing'
function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  let c = 0

  console.log("app ------------")

  async function clickMe() {
    try{
      const data = await api.get('/auth1')
    console.log("data", data)

    }catch(err){

    }
  }
  const loginHandler = async () => {
    const res = dispatch(login({}))
  }

  return (
    <div className='w-full'>
{/* <div>
        <button onClick={clickMe} >Click me</button>
        <button onClick={loginHandler} >login</button>
      

        </div> */}
      <AppRoute />

      
    </div>
  )
}

export default App
