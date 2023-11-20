import React from 'react'
import {EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, SlackOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <div className='flex flex-col items-center  pb-10 text-white bg-[#6D77CB] '>
    <div className='flex flex-row justify-evenly w-full items-start -red-900'>
      <div className='flex flex-col w-1/3 pl-24'> 
      <img width={100} className='pb-4' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700055132/gil7oxmzhprppghno7qe.png"/>
      <p className='pb-4'>Your Ultimate Choice for Opportunities and Growth!</p>
     
      <div className='flex justify-start'><FacebookOutlined className='text-3xl pr-4'/> 
    <TwitterOutlined className='text-3xl pr-4'/> <YoutubeOutlined className='text-3xl pr-4'/> <LinkedinOutlined className='text-3xl pr-4'/>
    <SlackOutlined className='text-3xl pr-4'/><InstagramOutlined className='text-3xl pr-4'/>
    </div>
      </div>
     <div className='w-2/3 flex justify-evenly'>
      <ul className='list-none'>
        <li className='font-medium'>Navigate</li>
        <li>Home</li>
        <li>Video</li>
        <li>People</li>
        <li>Event</li>
        <li>Job</li>
        <li>Reward</li>
        <li>Chat</li>
      </ul>
      <ul className='list-none'>
        <li className='font-medium'>Resources</li>
        <li>Support</li>
        <li>Blog</li>
      </ul>
      <ul className='list-none'>
        <li className='font-medium'>About MK-Talent</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
      <ul className='list-none'>
        <li className='font-medium'>Help</li>
        <li>Help</li>
        <li>FAQ</li>
      </ul>
      </div>
    </div>
    <p className='pt-8'> Copyright © 2023 MK-Talent. All rights reserved.</p>
    </div>
  )
}

export default Footer
