import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

const Navbar = () => {
  const items= useSelector((state:RootState)=> state.cart )

  return (
    <div className='m-3 mb-0 flex  border border-b-4'>
      <div className='p-4 font-bold text-red-400 text-4xl flex-1'>
        Ecom-LOGO
      </div>
      <div className='p-2 flex-1'>
        <input type="text" width="500px" className=" text-xl p-2 border border-neutral-400 rounded-sm " />
        <button className='border bg-red-600 p-2 font-medium text-xl rounded hover:text-white'>Submit</button>
      </div>
      <div className='p-4  flex '>
        <Link to='/cart'>
        <button className='flex hover:text-red-400'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  className="bi bi-cart-plus-fill flex-1 mt-1" viewBox="0 0 16 16">
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
        </svg> <span className='p-2 pr-2 font-semibold text-xl'>({items.products.length})</span>
        </button></Link>
        <Link to='/login'><button className='p-2 pr-2 font-semibold text-xl hover:text-red-400'>Login</button></Link>
        <Link to='/register'><button className='p-2 pr-2 font-semibold text-xl hover:text-red-400'>Register</button></Link>
      </div>
    </div>
  )
}

export default Navbar