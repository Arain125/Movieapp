import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'
import SignupForm from '../pages/SignupForm'
import MovieDetailsPage from '../pages/MovieDetailsPage'

const Approuteing = () => {
  return (
   <>
     <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/services' element = {<Services/>} /> 
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/login' element = { <SignupForm/> } />
        <Route path="/movie/:id" element={ <MovieDetailsPage/> } />
     </Routes>
   </>
  )
}

export default Approuteing
