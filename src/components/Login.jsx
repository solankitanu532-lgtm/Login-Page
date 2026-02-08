import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600'>
               <form className='flex flex-col justify-center items-center border-emerald-600 p-20'>
                  <input required className=' text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl py-3 px-5 placeholder:text-grey-400' type="email" placeholder='Enter your email'/>
                  <input
                  required className='text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl py-3 px-5 placeholder:text-grey-400 mt-3' type="password" placeholder='Enter your password' />
                  <button className='text-white mt-5 outline-none border-none rounded-full bg-emerald-600 text-xl py-3 px-5 placeholder:text-white'>Login in</button>
               </form>
        </div>
    </div>
    </div>
  )
}

