import React from 'react'
import  banner from '../Asserts/banner-image.jpg'
const Banner = () => {
  return (
    <div className='mx-7 my-3 flex justify-center'> 
    <img src={banner} alt="" className='h-1/2 bg-cover w-screen' />
    </div>
  )
}

export default Banner