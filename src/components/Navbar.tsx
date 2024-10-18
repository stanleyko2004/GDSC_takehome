import React from 'react';
import gdsc_logo from '../assets/gdsc_logo.svg';

const Navbar: React.FC = () => {
  // redirect to #
  const onClick = () => {
    window.location.href = '#';
  }
  return (
    <nav className='navbar'>
      <img className='navbar-left' src={gdsc_logo} alt='gdsc_logo' />
      <div className='navbar-right'>
        <a href='#' className='p2 navbar-text'>About</a>
        <a href='#' className='p2 navbar-text'>Projects</a>
        <a href='#' className='p2 navbar-text'>FAQ</a>
        <a href='#' className='p2 navbar-text'>Contact</a>
        <button onClick={onClick} className='button button-primary button-text'>Join</button>
      </div>
    </nav>
  )
}

export default Navbar