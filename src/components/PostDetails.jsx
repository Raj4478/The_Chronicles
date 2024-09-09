import React from 'react'
import { useSelector } from 'react-redux'


const PostDetails = () => {
    const select = useSelector((state)=>state.auth.url)
    console.log(select.content);
    
  return (
   <div className='text-black '>
    <div className='text-center py-4 font-new text-2xl  text-slate-600 bg-rose-400'><h1>{select.title}</h1></div>
  <div className='w-full border-2  '>
 
 <div className='flex justify-center  rounded-lg p-2 h-80 w-83'><img src={select.img} alt="" className=' object-cover'/></div>

 <div className='flex justify-around text-slate-500 border-t-2  px-12'>
        <div className=' pr-80 py-2 rounded-3xl font-new  '>Time : {select.published}</div>
        <div className=' py-2 rounded-3xl font-new'> Author : {select.author}</div>
        </div>  
    </div>

    <div><p className='text-center font-fat text-slate-600 mt-4'> {select.content}</p></div>
   </div>
  )
}

export default PostDetails