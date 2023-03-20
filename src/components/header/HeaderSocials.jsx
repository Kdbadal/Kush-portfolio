import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
        <a href="https://github.com/Kdbadal" target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href="https://twitter.com/Kdbadal" target="_blank" rel="noreferrer"><FiTwitter /></a>
        <a href="https://twitter.com/Kdbadal" target="_blank" rel="noreferrer"><FiInstagram/></a>
        
    </div>
  )
}

export default HeaderSocials