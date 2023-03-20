import React from 'react'
import './contact.css'
import {TbBrandGmail} from 'react-icons/tb'
import {SiWhatsapp} from 'react-icons/si'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i1qxv3j', 'template_9v1ylda', form.current, 'lSe1ACBNh4G9OqGMs')

    e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>hello there get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TbBrandGmail className='contact__option-icon'/>
            <h4>Gmail</h4>
            <h5>badalkushal999@gmail.com</h5>
            <a href="mailto:badalkushal999.com" target="_blank">Send a Mail</a>
          </article>

          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7016570915</h5>
            <a href="https://wa.me/7016570915" target="_blank">Message Me</a>
          </article>

          {/* <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mustafa Hussain</h5>
            <a href="https://m.me/hussainmnn" target="_blank">Message Me</a>
          </article> */}

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Gmail' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact