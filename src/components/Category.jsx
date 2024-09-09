import React, { useEffect } from 'react'
import { useState } from 'react';
import NewsCard from './NewsCard';
import Container from './Container';

const Category = () => {

let url;

const [select,useSelect] = useState(null)
const[collection,setCollection] = useState([])
if(select === null){
   url = `https://newsapi.org/v2/top-headlines?category=business&apiKey=a16490e6755040e88922a95a76cf4069`
}else{
  url = `https://newsapi.org/v2/top-headlines?category=${select}&apiKey=a16490e6755040e88922a95a76cf4069`
}
console.log(select);




const value = async () => {

  const news = await fetch(url)
  const data = await (news.json())
  setCollection(data.articles)
 console.log(data.articles);
// dispatch(input(data.articles))
//cdc24792c73b43b2ab925a1cb987c3e4
//console.log(data.articles);

}
useEffect(()=>{
value()

},[select])

  return (

    <>
  <div className='bg-black text-amber-300 '><ul className='flex  justify-between text-xl  font-new pt-4 pb-4 '>
    <li className='px-12 border-b-2 border-black hover:border-amber-400 hover:border-spacing-2 duration-500 ' onClick={((e) =>{ 
      useSelect("politics")
   })}>Politics</li>
    <li className='px-12 border-b-2 border-black hover:border-amber-400 hover:border-spacing-2 duration-500 '  onClick={((e) =>{ 
      useSelect("sports")
   })}>Sports</li>
    <li className='px-12 border-b-2 border-black hover:border-amber-400 hover:border-spacing-2 duration-500 '  onClick={((e) =>{ 
      useSelect("entertainment")
   })}>Entertainment</li>
    <li className='px-12 border-b-2 border-black hover:border-amber-400 hover:border-spacing-2 duration-500 '  onClick={((e) =>{ 
      useSelect("technology")
   })}>Technology</li>
    <li className='px-12 border-b-2 border-black hover:border-amber-400 hover:border-spacing-2 duration-500 '  onClick={((e) =>{ 
      useSelect("health")
   })}>Health</li></ul
   ></div>


   <div className='grid grid-cols-3   w-full h-full'>

{collection.map((news) => {



console.log((news.author));

  return news != null?(
  
      <NewsCard    description={news.description} title={news.title} url = {news.url} img={news.urlToImage} published={news.publishedAt} author={news.author} content=
      {news.content}  />
      
      
    
    
  
  ):null

  
})}
</div>
   </>
  )
  
}

export default Category