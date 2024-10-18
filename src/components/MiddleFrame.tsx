import React from 'react';
import middle_frame_picture from '../assets/middle_frame_picture.png';

const MiddleFrame: React.FC = () => {
  return (
    <div className='middle-frame-container'>
      <div className='middle-frame-left'>
        <h2 className='middle-frame-title'>Why join the Product Cohort?</h2>
        <div style={{ marginBottom: '40px' }}>
          <p className='p1 middle-frame-subtitle'>Because we turn your skills into tangible results!</p>
          <p className='p2 middle-frame-paragraph'>
            Do you want to take your development/design skills to the next level? <br />
            Are you ready to collaborate with a startup and create a product that <br />
            makes an impact? The UC Davis Google Developer Student Club’s <br />
            Product Cohort is the opportunity you've been waiting for. <br />
            <br />
            In this hands-on cohort, you won’t just learn—you’ll do. You will join a <br />
            small, dynamic team tasked with building a functional website for an <br />
            innovative startup. Together, you’ll experience the thrill and challenges <br />
            of working in  a fast-paced, real-world environment.
          </p>
        </div>
        <button className='button button-secondary button-text'>View our projects</button>
      </div>
      <img className='middle-frame-right' src={middle_frame_picture} alt='middle_frame_img' />
    </div>
  )
}

export default MiddleFrame