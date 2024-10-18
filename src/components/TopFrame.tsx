import React from 'react';
import top_frame_picture from '../assets/top_frame_picture.png';

const TopFrame: React.FC = () => {
  return (
    <div className='top-frame-container'>
      <div className='top-frame-left'>
        <div className='top-frame-text'>
          <p className='p1 top-frame-leadin'>Build Real-World Products with the</p>
          <h1 className='top-frame-title'>
            UC Davis <br />
            Product Cohort
          </h1>
          <p className='p1 top-frame-paragraph'>
            This cohort focuses on collaborating with real-world <br />
            startups to deliver a fully-functional product, simulating <br />
            the experience of working in a professional environment.
          </p>
        </div>
        <div className='top-frame-buttons'>
          <button className='button button-primary button-text'>Join our cohort</button>
          <button className='button button-secondary button-text' style={{ marginLeft: '40px' }}>Contact us</button>
        </div>
      </div>
      <img className='top-frame-right' src={top_frame_picture} alt='top_frame_img' />
    </div>
  )
}

export default TopFrame