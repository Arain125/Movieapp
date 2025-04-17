import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Approuteing from './components/Routing/Approuteing'
import LoginSignupForm from './components/pages/SignupForm'

const App = () => {
  return (
    <>
    <div className="bg-white dark:bg-gray-900 pt-25 ">
      <BrowserRouter>
      <Navbar/>
      <Approuteing/>
      <Footer/>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
