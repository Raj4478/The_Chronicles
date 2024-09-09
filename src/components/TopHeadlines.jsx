import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsCard from './NewsCard'
import Container from './Container'
import { useSelector } from 'react-redux'
import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { input } from '../store/AuthSlice'

const TopHeadlines = () => {

  let url;
  let date;
  const dispatch = useDispatch()
  const unq = useId();
  const select = useSelector((state) => state.auth.search)
    const [collection,setCollection] = useState([])
    
    const [event,setEvent] = useState([])
  
  
   const time = () =>{

     date = new Date();
    setEvent(date.toDateString())
   }

   console.log(event);
   
 useEffect(()=>{
  time()
 },[onchange])

    console.log(event);
    if(select === null){
     url = `https://newsapi.org/v2/everything?q=apple&from=2024-09-06&to=2024-09-06&sortBy=popularity&apiKey=a16490e6755040e88922a95a76cf4069`

    }
    else{

       url =  `https://newsapi.org/v2/everything?q=${select}&from=2024-09-06&to=2024-09-06&sortBy=popularity&apiKey=a16490e6755040e88922a95a76cf4069`
    }

   console.log(BUILD_TIMESTAMP);
   
    //console.log(select);
    


    const value = async () => {

        const news = await fetch(url)
        const data = await (news.json())
        setCollection(data.articles)
       //console.log(data.articles);
      // dispatch(input(data.articles))
 //cdc24792c73b43b2ab925a1cb987c3e4
 //console.log(data.articles);
    
    }

    useEffect(() => {

        value()

    },[select])

  
  return collection?(
   
   <Container >
   

   <h1 onChange={(()=>time())} className='border-double border-t text-white  pt-4 text-center font-new bg-black text-2xl  border-b-4 pb-3 border-black'>{event}</h1>


   <div className='grid grid-cols-4 mt-4'>


{collection.slice(0,41).map((news) => {



  
  
    return news.urlToImage?(
    
        <NewsCard    description={news.description} title={news.title} url = {news.url} img={news.urlToImage} published={news.publishedAt} author={news.author} content=
        {news.content} />
        
        
      
      
    
    ):null

    
})}


 </div> 
 </Container>
 
  ):null
 
}

export default TopHeadlines
