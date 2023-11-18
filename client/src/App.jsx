import { useEffect, useState } from 'react'
import './App.css';
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
    <>
      <div>
        <button onClick={clickMe} >Click me</button>
        <button onClick={loginHandler} >login</button>
      

        </div>
    </>
  )
}

export default App
