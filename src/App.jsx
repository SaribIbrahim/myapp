import { useEffect, useState } from "react"
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
import {createBrowserRouter,
   RouterProvider,
   createRoutesFromElements,
   Route}from "react-router-dom";
import NotFound from "./pages/NotFound";



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);

export default function App(){
  
  
  return <div>
    <RouterProvider router={router}/>
    

  </div> 
 
}



