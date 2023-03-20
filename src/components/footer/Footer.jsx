import React from 'react'
import './footer.css'
import {FiFacebook, FiGithub, FiLinkedin} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Kushal Badal </a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#testimonials">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/kushal-badal-094a71241/" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/@kdbadal" target="_blank"><FiGithub/></a>
        <a href="https://www.instagram.com/kd_badal/" target="_blank"><FiInstagram/></a>
        <a href="https://twitter.com/@kd_badal" target="_blank"><FiTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Kushal Badal All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer