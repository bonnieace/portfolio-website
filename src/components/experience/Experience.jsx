import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="experience-frontend">
      <h3>Front-End Development</h3>
      <div className="experience-content">
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
         <h4>HTML</h4>
         <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
         <h4>CSS</h4>
         <small className='text-light'>Intermediate</small>
       </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
          <h4>JS</h4>
          <small className='text-light'>Experienced</small>
         </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
           <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
           <h4>java</h4>
            <small className='text-light'>Experienced</small>
        </div>  
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
            <h4>c#</h4>
           <small className='text-light'>Experienced</small>
       </div>
        </article>

      </div>
        </div>
        <div className="expreience-backend">
        <h3>Back-End Development</h3>
      <div className="experience-content">
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
          <h4>NODE JS</h4>
          <small className='text-light'>Experienced</small>
          </div>
       
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
        <h4>MONGO DB</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
        
        <h4>PHP</h4>
        <small className='text-light'>Intermediate</small>
        
        </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
       <div>
       
        <h4>My Sql</h4>
        <small className='text-light'>Experienced</small>
      
        </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>

        <div>
        <h4>java</h4>
        <small className='text-light'>Experienced</small>

        </div>
        </article>
        <article className="experience-details">
        <BsFillPatchCheckFill className='experience-details-icon'/>
        <div>
        <h4>c#</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>

        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
