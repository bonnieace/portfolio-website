import React from 'react'
import './footer.css'
import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (

    <footer>
      <a href="#"className='footer-logo'>BONIFACE</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>


      </ul>
      <div className="footer-socials">
        <a href="httpa://facebook.com"><BsFacebook/></a>
        <a href="httpa://github.com"><BsGithub/></a>
        <a href="httpa://instagram.com"><BsInstagram/></a>

      </div>
      <div className="copyright">
        <small>&copy;Masota llc All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
