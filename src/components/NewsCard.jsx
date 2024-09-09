import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { input } from '../store/AuthSlice'

const NewsCard = ({description,title,url,img,published,author,content}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (

    <div className ="   pb-8  m-4 rounded-md hover:scale-110 duration-300 border-2  border-stone-400 " onClick={(() =>{
        dispatch(input({description,title,url,img,published,content,author}))
        navigate("/postdetails")}
        )}>
            
        <div className='w-full  ' >
            <img src={img} alt="" className=' ' />
        </div>
        <div className=''>
            <h3 className='text-center font-bold pb-4  border-slate-200 pt-8 '>{title}</h3>
        </div>
        

    
<div className="text-center w-full bottom-0     font-new right-0.5  ">
<button className="px-4 py-2 w-36  text-black  border  border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
  Read More
</button>
</div>
    </div>
  )
}

export default NewsCard

