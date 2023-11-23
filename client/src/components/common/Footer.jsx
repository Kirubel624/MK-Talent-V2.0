import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row justify-evenly w-full items-start pb-10'>
      <p>MK-Talent</p>
      <ul className='list-none'>
        <li>Community</li>
        <li>Facebook</li>
        <li>Telegram</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
      <ul className='list-none'>
        <li>Resources</li>
        <li>Support</li>
        <li>Blog</li>
      </ul>
      <ul className='list-none'>
        <li>Company</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Footer
