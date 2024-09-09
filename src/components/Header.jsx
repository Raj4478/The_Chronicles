import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
<div className=' sticky top-0 bg-white border-b flex justify-around  align-middle    border-black' >

    <div className='w-full border-black '><ul className='flex text-xl  justify-start pt-2   '>
  <div className='pb-2 h-full '><img src="../src/assets/Designer.png" alt="" className='h-12 bg-white '/></div>
    <div className='px-2 pt-2  text-3xl text-emerald-400  flex hover:border-b-2 font-great '>The Chronicles</div>
        <li className='px-2 pt-2  border-white font-new border-b transition-all delay-100 ease-in-out hover:border-slate-800 hover:border-spacing-2 duration-500'><Link to="/">Home</Link></li>
        <li className='px-2 pt-2 border-b delay-100 border-white hover:border-slate-800 duration-500 hover:border-spacing-2  font-new'><Link to="/category">Category</Link></li>
        <li className='px-2 pt-2 border-b delay-100 border-white hover:border-slate-800 font-new hover:border-spacing-2 duration-500'>Weather</li></ul></div>

        <div className='px-8 pt-4'>
          <Search/>
  </div>

        </div>  
  )
}

export default Header