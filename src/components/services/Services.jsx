import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li><BsCheckLg className='service-list-icon'/>dashboards and financial visualisation </li>
            <li><BsCheckLg className='service-list-icon'/>charts templates and infographics </li>
            <li><BsCheckLg className='service-list-icon'/>Mobile Applications user interface </li>
            <li><BsCheckLg className='service-list-icon'/>Websites and WebApps user interface </li>

            <li><BsCheckLg className='service-list-icon'/>Product design and custom designs </li>

          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li><BsCheckLg className='service-list-icon'/>E-commerce websites </li>
            <li><BsCheckLg className='service-list-icon'/>Dashboards </li>
            <li><BsCheckLg className='service-list-icon'/>Static and dynamic websites </li>
            <li><BsCheckLg className='service-list-icon'/>Blog websites </li>
            <li><BsCheckLg className='service-list-icon'/>WordPress websites </li>
            <li><BsCheckLg className='service-list-icon'/>portfolio websites </li>
            <li><BsCheckLg className='service-list-icon'/>Custom websites </li>





          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Content-creation</h3>
          </div>

          <ul className="service-list">
            <li><BsCheckLg className='service-list-icon'/>Lorem, ipsum dolor sit amet consectetur </li>
            <li><BsCheckLg className='service-list-icon'/>Lorem, ipsum dolor sit amet consectetur </li>
            <li><BsCheckLg className='service-list-icon'/>Lorem, ipsum dolor sit amet consectetur </li>
            <li><BsCheckLg className='service-list-icon'/>Lorem, ipsum dolor sit amet consectetur </li>

            <li><BsCheckLg className='service-list-icon'/>Lorem, ipsum dolor sit amet consectetur </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
