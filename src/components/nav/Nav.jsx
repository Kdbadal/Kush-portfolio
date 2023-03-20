import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {FiBookOpen} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
// import {BsFileCode} from 'react-icons/bs'
import {SiMicrodotblog} from 'react-icons/si'
import {MdOutlineContactPhone} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  
  const [activeNav,setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBookOpen /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      {/* <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFileCode /></a> */}
      <a href="#testimonials" onClick={()=> setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><SiMicrodotblog /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav