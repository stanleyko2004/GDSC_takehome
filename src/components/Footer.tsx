import React from 'react';
import discord from '../assets/discord.svg';
import gdsc_logo from '../assets/gdsc_logo.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import tiktok from '../assets/tiktok.svg';
import youtube from '../assets/youtube.svg';

const Footer: React.FC = () => {

  const onClick = () => {
    window.location.href = '#';
  }

  return (
    <div className='footer'>
      <div className='footer-gdsc'>
        <img src={gdsc_logo} alt='gdsc_logo' />
        <p className='p2 footer-gdsc-text'>
          Google Developer Student Clubs
        </p>
        <p className='p3 footer-ucd'>
          University of California, Davis
        </p>
      </div>
      <div className='footer-middle'>
        <div className='footer-middle-container'>
          <p className='p2 footer-middle-title'>
            Links
          </p>
          <a href='#' className='p3 footer-middle-text'>
            About
          </a>
          <a href='#' className='p3 footer-middle-text'>
            Apply
          </a>
          <a href='#' className='p3 footer-middle-text'>
            Projects
          </a>
        </div>
        <div className='footer-middle-container'>
          <p className='p2 footer-middle-title'>
            Students
          </p>
          <a href='#' className='p3 footer-middle-text'>
            FAQ
          </a>
          <a href='#' className='p3 footer-middle-text'>
            Contact
          </a>
          <a href='#' className='p3 footer-middle-text'>
            Newletter
          </a>
        </div>
      </div>
      <div className='footer-socials'>
        <img onClick={onClick} className='footer-socials-logo' src={instagram} alt='instagram logo' />
        <img onClick={onClick} className='footer-socials-logo' src={linkedin} alt='linkedin logo' />
        <img onClick={onClick} className='footer-socials-logo' src={youtube} alt='youtube logo' />
        <img onClick={onClick} className='footer-socials-logo' src={discord} alt='discord logo' />
        <img onClick={onClick} className='footer-socials-logo' src={tiktok} alt='tiktok logo' />
      </div>
    </div>
  )
}


export default Footer