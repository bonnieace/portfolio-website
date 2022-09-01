import React from 'react'
import './contacts.css'
import {AiOutlineMail,AiOutlineWhatsApp} from'react-icons/ai'
import {FaFacebookMessenger} from'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2adgqnj', 'template_me6xfw9', form.current, 'Stmhj_KKVKhkuVDUW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
<section id="contact">
  <h5>Get In Touch</h5>
  <h2>Contact Me</h2>

  <div className="container contact-container">
    <div className="contact-options">
      <article className="contact-option">
      <AiOutlineMail className="contact-icon"/>
        <h4>Email</h4>
        <h5>BonnieMasota@gmail.com</h5>
        <a href="mailto:bonniemasota@gmail.com" target="_blank">Send an email</a>
      </article>
      <article className="contact-option">
      <FaFacebookMessenger className="contact-icon"/>
        <h4>Messenger</h4>
        <h5>Bonnie Culture</h5>
        <a href="https:m.me/lastbon.wamweki"target="_blank">Send a message</a>
      </article>
      <article className="contact-option">
      <AiOutlineWhatsApp className="contact-icon"/>
        <h4>Whatsapp</h4>
        <h5>0722218106</h5>
        <a href="https://api.whatsapp.com/send?phone+254722218106">whatsapp me</a>
      </article>
    </div>
    <form ref={form}onSubmit={sendEmail}>
      <input type="text"name='name'placeholder='fullname' required />
      <input type="email" name='email'placeholder='email' required/>
      <textarea name="message" placeholder='Your Message'required rows="7"></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
</section>
    )
}

export default Contacts