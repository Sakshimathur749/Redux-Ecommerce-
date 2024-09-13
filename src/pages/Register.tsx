import React from 'react'

const Register = () => {
  return (
    <div className='my-10 mx-96 border border-slate-300'>
      <div className='text-center font-bold text-4xl m-5 '><h1 >Register</h1></div>
      <div className='flex gap-6 my-4 mx-8 p-3 border border-slate-300'>
        <div className='flex -1 gap-3 '>
          <input type="radio" />
          <label htmlFor="personal" className='font-medium text-lg'>Personal</label>
        </div>
        <div className='flex -1 gap-3'>
          <input type="radio" />
          <label htmlFor="company" className='font-medium text-lg'>Company</label>
        </div>
      </div>

      <div className='p-3  '>
        <div className='flex m-4 gap-4 border border-slate-300 '><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill bg-sky-400 h-12 w-20 px-2 py-1 rounded  " viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
        </svg><input type="email" placeholder='Email' className='p-3 outline-none' /></div>
        <div className='flex m-4 gap-4  border border-slate-300'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill  bg-sky-400 h-12 w-20 px-2 py-1 rounded " viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg><input type="text" name="" id="" className='p-3 outline-none' placeholder='Username' /></div>
        <div className='flex m-4 gap-4  border border-slate-300'><svg xmlns="http://www.w3.org/2000/svg" className=' bg-sky-400 h-12 w-20 px-2 py-1 rounded' x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
          <path d="M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 8 14 C 8.55 14 9 14.45 9 15 C 9 15.55 8.55 16 8 16 C 7.45 16 7 15.55 7 15 C 7 14.45 7.45 14 8 14 z M 12 14 C 12.55 14 13 14.45 13 15 C 13 15.55 12.55 16 12 16 C 11.45 16 11 15.55 11 15 C 11 14.45 11.45 14 12 14 z M 16 14 C 16.55 14 17 14.45 17 15 C 17 15.55 16.55 16 16 16 C 15.45 16 15 15.55 15 15 C 15 14.45 15.45 14 16 14 z"></path>
        </svg><input type="password" className='p-3 outline-none' placeholder='Password' /></div>
      </div>

      <div className='flex gap-4  my-4 mx-8 p-3 border border-slate-300'>
        <div className='flex -1 gap-1'>
          <input type="radio" />
          <label htmlFor="male" className='font-medium text-lg'>Male</label>
        </div>
        <div className='flex-1 gap-1'>
          <input type="radio" />
          <label htmlFor="female" className='font-medium text-lg'>female</label>
        </div>
      </div>

      <div className='font-semibold text-lg m-5 text-center'>
        <span>By clicking register you agree on our <a className='text-sky-500 underline'> Privacy Policy  </a> </span>
      </div>

      <div className='my-4 mx-10 bg-red-500 text-center py-5 text-white font-extrabold text-xl hover:text-red-600'>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Register