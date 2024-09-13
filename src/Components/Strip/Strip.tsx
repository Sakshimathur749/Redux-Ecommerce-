import React from 'react'
import { Link } from 'react-router-dom'
const Strip = () => {
  return (
    <div className='m-3 border border-b-4 flex justify-center'>
        <div className='p-3 font-semibold hover:text-red-400 cursor-pointer'> <Link to="/">Home</Link></div>
        <div className='p-3 font-semibold hover:text-red-400 cursor-pointer'> <Link to="/products">Products</Link></div>
        <div className='p-3 font-semibold hover:text-red-400 cursor-pointer'> <Link to="/about">About</Link></div>
        <div className='p-3 font-semibold hover:text-red-400 cursor-pointer'><Link to="/contact">Contact</Link> Us</div>
    </div>
  )
}

export default Strip