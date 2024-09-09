import React from 'react'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { input } from '../store/AuthSlice'

const Search = () => {

  let data;
    const[value,setValue] = useState("")
    const dispatch = useDispatch(input(value))

    const handleSubmit =  (e) => {
      e.preventDefault();
  setValue(e.target.elements.input.value)
//console.log(e.target.elements.input.value);

data = e.target.elements.input.value
dispatch(input({search :data}))



    }
    

  return (
    <form onSubmit={handleSubmit} className='flex '>
      <label htmlFor="input"></label>
    <input type="text" placeholder='Search' name='input' className='text-center text-black font-semibold rounded-sm border-2 bg-stone-100 border-stone-900 '   />
    <button className='px-8 border-2 text-stone-800 border-stone-900 font-serif '>Search</button>
    </form>
  )
}

export default Search