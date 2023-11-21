import Button  from './Button.jsx'
import React, { useEffect, useState } from 'react'
import { Drawer } from 'antd'
import HamburgerMenu  from "../../assets/hamburger.svg";

const NavBar = () => {
    const[screenWidth, setScreenWidth]=useState(window.innerWidth)
  const [open, setOpen] = useState(false);
const onClose=()=>{
    setOpen(false)
}
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
            <p className='text-[#6D77CB] font-bold font-sans pl-8 whitespace-nowrap'>MK-Talent</p>
        {
            screenWidth>=500? 
            <>
            <div className='flex flex-row justify-end pl-8 items-center w-full text-[#6D77CB] font-bold font-sans'>
            
<div>
            <Button text="Login" style="mr-4 text-white bg-[#6D77CB] px-4 py-2 rounded-full"/>
            <Button text="Signup" style="text-[#6D77CB] mr-8"/>
</div>
            </div>
            </>
            :<>
              <div className="pr-4 lg:hidden " onClick={() => setOpen(true)}>
             
             <img src={HamburgerMenu} />
           </div>
             <Drawer
        title=""
        placement="right"
        onClose={onClose}
        open={open}
       
      >
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl mb-4'>Welcome</h1>
            <Button text="Login" style="w-full mb-4 text-white bg-[#6D77CB] px-4 py-2 rounded"/>
            <Button text="Signup" style="w-full text-[#6D77CB]"/>
        </div>
  
      </Drawer>
            </>
        }
     
    </div>
  )
}

export default NavBar
