import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill,BsFolderFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
const About = () => {
  return (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about-container">
      <div className="about-me">
        <div className="about-me-image">
        <img src={ME} alt="About Image" />
        </div>
      </div>
      <div className="about-content">
        <div className="about-cards">
          <article className='about-card'>
          <BsFillAwardFill className='about-icon'/>
          <h5>  Experience</h5>
          <small>3+ years coding experience</small>


          </article>
          <article className='about-card'>
          <FiUsers className='about-icon'/>
          <h5>  clients</h5>
          <small>5+ clients </small>


          </article>
          <article className='about-card'>
          <BsFolderFill className='about-icon'/>
          <h5>  Projects</h5>
          <small>20+completed</small>


          </article>
        </div>
     
        <p>I am a junior developer who takes their code as both art and work. I am very creative working by myself but i am also a great team player when it comes to collaborating with others.
          I am located in Kenya,Africa </p>
     <a href="#contact" className="btn btn-primary">Lets Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About
