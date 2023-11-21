import React, { useEffect, useState } from 'react'

const LandingPageLayout = ({heading,paragraph,buttonText,imgURL,buttonStyle,direction="row",imageWidth}) => {
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
    <div className={`flex flex-wrap w-full justify-start lg:justify-between items-start lg:items-center px-10 py-24 brder-2 brder-green-900`}>
      <div className='brder brder-red-900 flex flex-col justify-start w-full lg:w-1/2 boder-2 boder-green-900 px-0 lg:px-12'>
        <h1 className='font-bold text-4xl pb-4 leading-normal'>{heading}</h1>
        <p className='text-base pb-4 text-gray-600'>{paragraph}</p>
        <button className={buttonStyle}>{buttonText}</button>
      </div>
      <div className='w-full brder brder-red-900 lg:w-1/2 brder-2 brder-green-900 flex items-center justify-center'>
      <img src={imgURL} className="w-full object-cover" style={{ maxWidth: screenSize > 1024 && `${imageWidth}px` }} alt="Layoutimage" />
      </div>
    </div>
  )
}

export default LandingPageLayout
