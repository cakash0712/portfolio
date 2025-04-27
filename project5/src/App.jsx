import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'


import About from './About'
import Home from './Home'
import Skills from './Skills'
import Project from './Project'

function App() {
  

  return (
    <>
       <Navbar/>
       <Routes>
     
         <Route path='/Home' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Skills' element={<Skills/>}/>
         <Route path='/Project' element={<Project/>}/>
         <Route path='/Contact' element={<Contact/>}/>



       </Routes>

    </>
  )
}

export default App
