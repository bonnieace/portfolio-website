import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../assets/me.png'
import Headersocials from './Headersocials.jsx'
import { useState } from 'react'

const Header = () => {
  const[ activeNav,setActiveNav]=useState('');

  return (
    <div>
      <header>
        <div className='container header-container'>
          <h5>Hello I'm</h5>
          <h1>Boniface Masota</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          
          <CTA/>
          <div className="me">

          <img src={ME} alt="me" />

        </div>
        <Headersocials/>

        <a href="#contact" className="scroll-down">scroll down</a>

        </div>
       

      </header>

      </div>
  )
}

export default Header
