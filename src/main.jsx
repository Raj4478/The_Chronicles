import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store/store.js'
import {Provider} from "react-redux"
import { createBrowserRouter } from 'react-router-dom'
import Category from './components/Category.jsx'
import { RouterProvider } from 'react-router-dom'
import TopHeadlines from './components/TopHeadlines.jsx'
import PostDetails from './components/PostDetails.jsx'

const router = createBrowserRouter([
{
  path :"/",
  element:<App/>,
  children: [
    {
      path:"/category",
      element:<Category/>

    }
    ,{
      path:"/",
      element:<TopHeadlines/>
    }
    ,{

      path:"/postdetails",
      element:<PostDetails/>
    }
  ]
},

]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
