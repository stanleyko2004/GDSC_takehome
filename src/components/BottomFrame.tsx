import React from 'react';
import a_professional_network from '../assets/a_professional_network.png';
import bottom_frame_picture1 from '../assets/bottom_frame_picture1.png';
import bottom_frame_picture2 from '../assets/bottom_frame_picture2.png';
import hands_on_experience from '../assets/hands_on_experience.png';
import mentorship_that_matters from '../assets/mentorship_that_matters.png';


interface RowProps {
  title: string;
  img: string;
  children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ title, img, children }) => {
  return (
    <div className='bottom-frame-row'>
      <div className='bottom-frame-row-title'>
        <img src={img} style={{ height: 46, width: 44 }} />
        <h3 className='bottom-frame-row-title-words'>
          {title}
        </h3>
      </div>
      <p className='p2 bottom-frame-row-text'>
        {children}
      </p>
    </div>
  )
}

const BottomFrame: React.FC = () => {
  return (
    <div className='bottom-frame-container'>
      <div className='bottom-frame-pictures'>
        <img src={bottom_frame_picture1} alt='bottom_frame_img1' style={{ marginBottom: 20 }} />
        <img src={bottom_frame_picture2} alt='bottom_frame_img2' />
      </div>
      <div className='bottom-frame-text'>
        <div style={{ marginBottom: '60px' }}>
          <h2 className='bottom-frame-title'>
            Benefits of the Product Cohort
          </h2>
          <Row title='Hands-on Experience' img={hands_on_experience}>
            This cohort gives you the chance to work in a real-world scenario with <br />
            real deadlines, clients, and deliverables. By the end of the project, you’ll <br />
            have a fully developed website to showcase in your portfolio.
          </Row>
          <Row title='Mentorship That Matters' img={mentorship_that_matters}>
            With guidance from experienced product managers who know the ins <br />
            and outs of launching professional websites, you’ll navigate through the <br />
            complexities of client communication and team dynamics.
          </Row>
          <Row title='A Professional Network' img={a_professional_network}>
            This cohort gives you the chance to work in a real-world scenario with <br />
            real deadlines, clients, and deliverables. By the end of the project, you’ll <br />
            have a fully developed website to showcase in your portfolio.
          </Row>
        </div>
        <div>
          <button className='button button-primary button-text'>Join our cohort</button>
          <button className='button button-secondary button-text' style={{ marginLeft: '40px' }}>Contact us</button>
        </div>
      </div>
    </div>
  )
}


export default BottomFrame