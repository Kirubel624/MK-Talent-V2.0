import Button  from './Button.jsx'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const[screenWidth, setScreenWidth]=useState(window.innerWidth)
    useEffect(()=>{
const handleScreenWidth=()=>{
    setScreenWidth(window.innerWidth)
}
window.addEventListener('resize',handleScreenWidth)
return ()=>{
    window.removeEventListener('resize',handleScreenWidth)
}
    },[screenWidth])
  return (
    <div className=' backdrop-blur-lg w-full fixed p-4 top-0 z-50 boder flex flex-row justify-between items-center boder-red-900'>
        {
            screenWidth>=1024? 
            <>
            <div className='flex flex-row justify-between pl-8 items-center w-full text-[#6D77CB] font-bold font-sans'>
                <p>MK-Talent</p>
<div>
            <Button text="Login" style="mr-4 text-white bg-[#6D77CB] px-4 py-2 rounded-full"/>
            <Button text="Signup" style="text-[#6D77CB] mr-8"/>
</div>
            </div>
            </>
            :<></>
        }
     
    </div>
  )
}

export default NavBar
