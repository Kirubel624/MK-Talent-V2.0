import React, { useEffect, useState } from 'react'
import LandingPageLayout from '../components/common/LandingPageLayout'
import Footer from '../components/common/Footer'
import {LikeFilled, HeartFilled, SendOutlined, TrophyFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Landingpage = () => {
  const[screenSize,setScreenSize]=useState(window.innerWidth)
  useEffect(()=>{
    const handleResize=()=>{
      setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }
  },[])
  return (
    <div className='w-full brder-[10px] brder-red-900'>

      
       <div className={`flex flex-row w-full justify-between items-center px-10 py-24 brder-2 brder-green-900`}>
      <div className={`flex flex-col justify-start ${screenSize<1200?"w-full":"w-1/2 "} brder-2 brder-purple-900 px-12`}>
        <h1 className='font-bold text-4xl pb-4 leading-normal'>MK-Talent: Your Ultimate Choice for Opportunities and Growth!</h1>
        <p className='text-base pb-4 text-gray-600'>We provide many ways for you to get yourself out there and introduce yourself to the world. 
      Join us and make your work opportunity a little Easier! Grow your portfolio by doing jobs,
      participating in events and getting rewards.</p>
        <Link to="/home" className="bg-[#6D77CB] w-1/2 rounded text-white px-4 py-2 text-center">Get started</Link>
      </div>
{
     screenSize>=1200&& 
     <div className="w-1/2  flex items-end justify-end pr-24 boder borer-red-900">
      <div className="brder-2 brder-green-900 relative">
        <img
          src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700505124/izz2e3bwutut8qzjdtuh.png"
          className=""
          width={400}
          alt="Layoutimage"
        />
        <div className="absolute top-40 left-[-100px] drop-shadow-lg shadow shadow-gray-200 bg-white text-black p-5 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 rounded">
          <p className='font-medium'>Chats</p>
        
          <div className="bg-white py-3 mb- rounded-md -md flex items-center">
          <img className='rounded-full w-7 h-7 object-cover mr-4' src='https://res.cloudinary.com/dvqawl4nw/image/upload/v1700505745/xhttod29hkgutblplc8a.avif'   alt="User Avatar"/>
      <div>
        <p className="text-xs font-semibold">John Doe</p>
        <p className="text-gray-500 text-xs">Lorem ipsum dolor...</p>
      </div>
    </div>
          <div className="bg-white py-3 mb- rounded-md -md flex items-center">
      <img
        src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576198/z8kjqwsl82lthhhdljc2.avif" // Replace with the actual URL of the profile picture
        alt="User Avatar"
        className="w-7 h-7 object-cover rounded-full mr-4"
      />
      <div>
        <p className="text-xs font-semibold">John Doe</p>
        <p className="text-gray-500 text-xs">Lorem ipsum dolor...</p>
      </div>
    </div>
          <div className="bg-white py-3 mb- rounded-md -md flex items-center">
      <img
        src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700576196/f2uibet1zsaah1eezqit.avif" // Replace with the actual URL of the profile picture
        alt="User Avatar"
        className="w-7 h-7 object-cover rounded-full mr-4"
      />
      <div>
        <p className="text-xs font-semibold">John Doe</p>
        <p className="text-gray-500 text-xs">Lorem ipsum dolor...</p>
      </div>
    </div>
    <div className=" pt-4 flex items-center">
      <input
        type="text"
        disabled
        placeholder="Type your message..."
        className="flex-1 p-2 brder-[1px] bg-gray-100 brder-gray-300 rounded-l-full focus:outline-none focus:brder-[#6D77CB] text-xs"
      />
      <button className="bg-[#6D77CB] brder-[1px] brder-[#6D77CB] text-white px-2 py-2 rounded-r-full flex justify-center"><SendOutlined/></button>
    </div>
        </div>
        <div className="absolute drop-shadow-md bottom-10 right-10 bg-white text-black py-2 px-4 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 rounded">
          <span className='flex flex-row items-center'><HeartFilled className='text-red-500 pr-2'/>1K</span> 
        </div>
        <div className="absolute drop-shadow-md top-[5rem] right-10 bg-white text-black py-2 px-4 cursor-pointer transition-opacity duration-300 group-hover:opacity-100 rounded">
          <span className='flex flex-row items-center'><TrophyFilled className='text-[#FFD700] pr-2'/>Rewards</span> 
        </div>
      </div>
    </div>
    }
    </div>


      <LandingPageLayout heading="Now is your moment to build a better tomorrow"
      paragraph="We’ve seen what the future can be. Now it’s time to decide what it will be."
      direction='row-reverse'
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238486/lleoizzhei6pcdlyi56d.jpg"
       imageWidth={400}
       />
      <LandingPageLayout heading="Expand your network by joining us"
      paragraph="Connect with diffrent companies and grow your network. 
      Join us and make your work opportunity Easier! 
      Transform the way you work with one place for everyone and everything you need to get stuff done."
 
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238561/nbrictlprgvp6dslqysa.jpg"
       imageWidth={400} 
       />
      <LandingPageLayout heading="Manage your company by recruiting the right talents for the job."
      paragraph="The next great talent to make your company shine could just be right around the corner! 
      Transform the way you look for talents one place for everyone and everything you need to get stuff done."
      
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238568/qjgaxzpqjwqw0yzdr8nx.jpg"
       imageWidth={400} direction="row-reverse"
       />
       
      <LandingPageLayout heading="Get Rewards"
      paragraph="The more jobs you do the more experience you get which adds up to getting amazing rewards! 
      OH! but wait Its not the reward that matters its the road you took to get there the reward is something
       extra what matters is the person you became after getting to the end of the road."      
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238573/n0xblixadmngztctdqx9.jpg"
       imageWidth={400} 
       />
       {/* Get started section */}
<div className='flex flex-col justify-center items-center'>
  <h1 className='text-4xl font-bold text-center'>Get started with MK-Talent</h1>
  <div className='flex flex-wrap justify-center items-center w-[90%] pt-16 pb-10'>
    <div className='flex flex-col w-full lg:w-1/3 pl-0 lg:pl-10 lg:pb-0 pb-10'>
      <div className='w-10 h-10 bg-[#6D77CB] font-bold flex items-center justify-center text-white rounded text-xl mb-4'>1</div>
   <h1 className='text-2xl font-medium pb-2'>Sign up</h1> 
<p>Create a new account in just a few moments. It’s completly free.</p>
  </div>
  <div className='flex flex-col w-full lg:w-1/3 lg:pb-0 pb-10'>
      <div className='w-10 h-10 bg-[#6D77CB] font-bold flex items-center justify-center text-white rounded text-xl mb-4'>2</div>
   <h1 className='text-2xl font-medium pb-2'>Career advancement</h1> 
<p>Advance your career by joining us. do jobs to get the experience you need.</p>
  </div>
  <div className='flex flex-col w-full lg:w-1/3 lg:pb-0 pb-10'>
      <div className='w-10 h-10 bg-[#6D77CB] font-bold flex items-center justify-center text-white rounded text-xl mb-4'>3</div>
   <h1 className='text-2xl font-medium pb-2'>No Third-party interference</h1> 
<p>The talent and talent seeker can make a deal on the job without any third party interference.</p>
  </div>
</div>
</div>
{/* Mk-Talent Developers section */}
<div className='bg-[#] text-white py-20 relative'>

  {/* SVG Background */}
  <div className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#6D77CB] rounded-full opacity-50"></div>
  <div className="absolute top-1/3 left-[10%] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#6D77CB] rounded-full opacity-50"></div>
  <div className="absolute bottom-[1%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#6D77CB] rounded-full opacity-50"></div>
  <div className="absolute top-1/3 right-[10%] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#6D77CB] rounded-full opacity-50"></div>
  <div className="absolute top-2/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#6D77CB] rounded-full opacity-50"></div>


  {/* Backdrop */}
  <div className="absolute top-0 left-0 w-full h-full backdrop-blur-md bg-white/30"></div>
 <div className='m-5 backdrop-blur-0' ><h1 className='text-4xl font-bold text-center text-black mt-4 z-50 top-0'>MK-Talent Developers</h1></div> 

  <div className='flex lg:flex-row flex-col justify-evenly items-center pt-10 px-24'>
    {/* Developer 1 */}
    <div className='backdrop-blur-md shadow shadow-gray-400 w-full lg:w-1/2 min-h-[300px] bg-white/30 text-black p-10 rounded m-5'>
      <div className='flex flex-row items-center mb-4'>
        <img className='rounded-full mr-6' width={80} src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700245512/drzphbvzbpwanm6cwhu0.png"/> 
        <p className='font-bold text-lg'>Kirubel Berhanu</p>
      </div>   
      <p>
        MK-Talent: Transforming talent management. Connect with top talents, showcase your skills, and unlock rewards. More than a website, it's a dynamic talent ecosystem. 🌐✨
      </p>
    </div>
    
    {/* Developer 2 */}
    <div className='backdrop-blur-md shadow shadow-gray-400 min-h-[300px] bg-white/30 text-black w-full lg:w-1/2 p-10 rounded m-5'>
      <div className='flex flex-row items-center mb-4'>
        <img className='rounded-full mr-6' width={80} src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700245512/drzphbvzbpwanm6cwhu0.png"/>
        <p className='font-bold text-lg'>Marshal Yordanos</p>
      </div> 
      <p>
        MK-Talent: Your talent hub. Discover exceptional individuals, share journeys, and earn rewards. Join us in reshaping digital connections and thriving talent communities.💡🚀
      </p>
    </div>
  </div>
</div>

<Footer/>
    </div>
  )
}

export default Landingpage
