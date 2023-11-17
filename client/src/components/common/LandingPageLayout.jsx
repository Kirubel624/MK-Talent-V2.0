import React from 'react'

const LandingPageLayout = ({heading,paragraph,buttonText,imgURL,buttonStyle,direction="row",imageWidth}) => {
  return (
    <div className={`flex flex-${direction} w-full justify-between items-center px-10 py-24 boder-2 boder-green-900`}>
      <div className='flex flex-col justify-start w-1/2 boder-2 boder-green-900 px-12'>
        <h1 className='font-bold text-4xl pb-4 leading-normal'>{heading}</h1>
        <p className='text-base pb-4 text-gray-600'>{paragraph}</p>
        <button className={buttonStyle}>{buttonText}</button>
      </div>
      <div className='w-1/2 brder-2 brder-green-900 flex items-center justify-center'>
        <img src={imgURL} width={imageWidth} alt="Layoutimage"/>
      </div>
    </div>
  )
}

export default LandingPageLayout
