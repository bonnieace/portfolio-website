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
          <small>300+ clients internationally</small>


          </article>
          <article className='about-card'>
          <BsFolderFill className='about-icon'/>
          <h5>  Projects</h5>
          <small>80+completed</small>


          </article>
        </div>
     
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis voluptas quo reprehenderit, cum quaerat modi expedita illo quos hic eaque blanditiis exercitationem similique ex illum commodi voluptatibus. Possimus, magni!</p>
     <a href="#contact" className="btn btn-primary">Lets Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About
