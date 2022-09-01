import React from 'react'
import '../src/assets/bg-texture.png'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
     <Header/> 
     <Nav/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>
     <Footer/>

     

      
    </div>
  )
}

export default App
