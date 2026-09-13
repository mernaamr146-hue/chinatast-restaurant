import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Component/LayOut'
import NotFound from './Component/NotFound'
import Home from './Component/Home'
import Menu from './Component/Menu'
import AboutUs from './Component/AboutUs'
import CardDetails from './Component/CardDetails'

function App() {
 let route= createBrowserRouter([
    {path:'',element:<LayOut></LayOut>,children:[
       {index:true, element:<Home></Home>},
       {path:'menu', element:<Menu></Menu>},
       {path:'dish/:id' ,element:<CardDetails></CardDetails>},
       {path:'aboutus', element:<AboutUs></AboutUs>},
      {path:'*', element:<NotFound></NotFound>},
      
    ]}
  ])

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
