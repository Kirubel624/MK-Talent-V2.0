import React from 'react'
import {EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, SlackOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <div className='flex flex-col items-center  py-10 text-white bg-[#6D77CB] '>
    <div className='flex flex-col md:flex-row justify-evenly md:w-full items-start -red-900'>
      <div className='flex flex-col w-full items-center md:w-1/3 md:pl-24'> 
      <img width={100} className='pb-4' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700055132/gil7oxmzhprppghno7qe.png"/>
      <p className='pb-4 text-start'>Your Ultimate Choice for Opportunities and Growth!</p>
     
     
      </div>
     <div className='w-full md:w-2/3 md:flex-row flex flex-col md:justify-evenly md:items-start justify-center items-center  -red-900'>
      <ul className='list-none md:pb-0 pb-4 md:text-start text-center'>
        <li className='font-medium  text-lg'>Navigate</li>
        <li>Home</li>
        <li>Video</li>
        <li>People</li>
        <li>Event</li>
        <li>Job</li>
        <li>Reward</li>
        <li>Chat</li>
      </ul>
      <ul className='list-none md:pb-0 pb-4 md:text-start text-center'>
        <li className='font-medium  text-lg'>Resources</li>
        <li>Support</li>
        <li>Blog</li>
      </ul>
      <ul className='list-none md:pb-0 pb-4 md:text-start text-center'>
        <li className='font-medium  text-lg'>About MK-Talent</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <ul className='list-none md:pb-0 pb-4 md:text-start text-center'>
        <li className='font-medium  text-lg'>Help</li>
        <li>Help</li>
        <li>FAQ</li>
      </ul>
      </div>
    </div>
    <div className='flex justify-start pt-8'><FacebookOutlined className='text-3xl pr-4'/> 
    <TwitterOutlined className='text-3xl pr-4'/> <YoutubeOutlined className='text-3xl pr-4'/> <LinkedinOutlined className='text-3xl pr-4'/>
    <SlackOutlined className='text-3xl pr-4'/><InstagramOutlined className='text-3xl pr-4'/>
    </div>
    <p className='pt-8'> Copyright © 2023 MK-Talent. All rights reserved.</p>
    </div>
  )
}

export default Footer
