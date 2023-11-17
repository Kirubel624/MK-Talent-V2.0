import React from 'react'
import LandingPageLayout from '../components/common/LandingPageLayout'

const Landingpage = () => {
  return (
    <div className='w-full'>
      <LandingPageLayout heading="MK-Talent: Your Ultimate Choice for Opportunities and Growth!"
      paragraph="We provide many ways for you to get yourself out there and introduce yourself to the world. 
      Join us and make your work opportunity a little Easier! Grow your portfolio by doing jobs, participating in events and getting rewards."
      buttonText="Get started" buttonStyle="bg-[#6D77CB] w-1/2 rounded text-white px-4 py-2"
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700075875/gp3oc76tnjd7qukbubp0.png"
       imageWidth={250}
       />
      <LandingPageLayout heading="Now is your moment to build a better tomorrow"
      paragraph="We’ve seen what the future can be. Now it’s time to decide what it will be."
      direction='row-reverse'
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238486/lleoizzhei6pcdlyi56d.jpg"
       imageWidth={450}
       />
      <LandingPageLayout heading="Expand your network by joining us"
      paragraph="Connect with diffrent companies and grow your network. Join us and make your work opportunity Easier! Transform the way you work with one place for everyone and everything you need to get stuff done."
 
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238561/nbrictlprgvp6dslqysa.jpg"
       imageWidth={350} 
       />
      <LandingPageLayout heading="Manage your company by recruiting the right talents for the job and focus on efficiency."
      paragraph="The next great talent to make your company shine could just be right around the corner! Transform the way you look for talents one place for everyone and everything you need to get stuff done."
      
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238568/qjgaxzpqjwqw0yzdr8nx.jpg"
       imageWidth={400} direction="row-reverse"
       />
       
      <LandingPageLayout heading="Get Rewards"
      paragraph="The more jobs you do the more experience you get which adds up to getting amazing rewards! OH! but wait Its not the reward that matters its the road you took to get there the reward is something extra what matters is the person you became after getting to the end of the road."
      
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238573/n0xblixadmngztctdqx9.jpg"
       imageWidth={400} 
       />

    </div>
  )
}

export default Landingpage
