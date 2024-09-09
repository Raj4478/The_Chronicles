import { useState } from 'react'
import TopHeadlines from './components/TopHeadlines'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
<Header/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default App
