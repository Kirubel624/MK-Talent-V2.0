import React from 'react'
import LandingPageLayout from '../components/common/LandingPageLayout'
import Footer from '../components/common/Footer'

const Landingpage = () => {
  return (
    <div className='w-full'>
      <LandingPageLayout heading="MK-Talent: Your Ultimate Choice for Opportunities and Growth!"
      paragraph="We provide many ways for you to get yourself out there and introduce yourself to the world. 
      Join us and make your work opportunity a little Easier! Grow your portfolio by doing jobs,
      participating in events and getting rewards."
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
      paragraph="Connect with diffrent companies and grow your network. 
      Join us and make your work opportunity Easier! 
      Transform the way you work with one place for everyone and everything you need to get stuff done."
 
       imgURL="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700238561/nbrictlprgvp6dslqysa.jpg"
       imageWidth={350} 
       />
      <LandingPageLayout heading="Manage your company by recruiting the right talents for the job and focus on efficiency."
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
  <div className='flex flex-row justify-center items-center w-[90%] pt-16 pb-10'>
    <div className='flex flex-col w-1/3 pl-10'>
      <div className='w-10 h-10 bg-[#6D77CB] font-bold flex items-center justify-center text-white rounded text-xl mb-4'>1</div>
   <h1 className='text-2xl font-medium pb-2'>Sign up</h1> 
<p>Create a new account in just a few moments. It’s completly free.</p>
  </div>
  <div className='flex flex-col w-1/3'>
      <div className='w-10 h-10 bg-[#6D77CB] font-bold flex items-center justify-center text-white rounded text-xl mb-4'>2</div>
   <h1 className='text-2xl font-medium pb-2'>Career advancement</h1> 
<p>Advance your career by joining us. do jobs to get the experience you need.</p>
  </div>
  <div className='flex flex-col w-1/3'>
      <div className='w-10 h-10 bg-[#6D77CB] font-bold flex items-center justify-center text-white rounded text-xl mb-4'>3</div>
   <h1 className='text-2xl font-medium pb-2'>No Third-party interference</h1> 
<p>The talent and talent seeker can make a deal on the job without any third party interference.</p>
  </div>
</div>
</div>
{/* Mk-Talent Developers section */}
<div className='bg-[#] text-white py-20 relative'>

  {/* SVG Background */}
  <svg
      className="absolute flex justify-end items-end inset-x-0 bottom-0 w-full h-full z-[-1] boder boder-red-900"

  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#6D77CB" fill-opacity="1" d="M0,96L21.8,90.7C43.6,85,87,75,131,112C174.5,149,218,235,262,229.3C305.5,224,349,128,393,80C436.4,32,480,32,524,64C567.3,96,611,160,655,170.7C698.2,181,742,139,785,106.7C829.1,75,873,53,916,42.7C960,32,1004,32,1047,53.3C1090.9,75,1135,117,1178,133.3C1221.8,149,1265,139,1309,117.3C1352.7,96,1396,64,1418,48L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>

  <h1 className='text-4xl font-bold text-center text-[#6D77CB]'>MK-Talent Developers</h1>
  <div className='flex flex-row justify-evenly items-center pt-10'>
    <div className='backdrop-blur-md shadow shadow-gray-400 w-1/4 h-80 bg-white/30 text-black p-10 rounded'>
  <div className='flex flex-row items-center mb-4'><img className='rounded-full mr-6' width={80} src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700245512/drzphbvzbpwanm6cwhu0.png"/> <p className='font-bold text-lg'>Kirubel Berhanu</p></div>   
      <p>
        Building more than just a website, we're crafting a digital universe on MK-Talent. Join us in redefining social interactions through code – where every line creates connections. 🌐✨
      </p>
    </div>
    <div className='backdrop-blur-md shadow shadow-gray-400 h-80 bg-white/30 text-black w-1/4 p-10 rounded'>
    <div className='flex flex-row items-center mb-4'><img className='rounded-full mr-6' width={80} src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1700245512/drzphbvzbpwanm6cwhu0.png"/><p className='font-bold text-lg'>Marshal Yordanos</p></div> 
      <p>
        Unlocking the social potential of every line of code on MK-Talent. Join us in shaping the digital narrative where innovation meets interaction. 💡🚀
      </p>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Landingpage
