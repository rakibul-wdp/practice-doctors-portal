import React from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Banner = () => {
  return (
    <div className='hero min-h-[80vh]' style={{ background: `url(${background})` }}>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={chair} className='max-w-xl rounded-lg shadow-2xl' alt='' />
        <div>
          <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
