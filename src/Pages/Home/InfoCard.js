import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
  return (
    <div className={`card lg:card-side ${bgClass} shadow-xl`}>
      <figure className='pl-5 sm:pt-10 md:pt-10 lg:pt-0'>
        <img src={img} alt='Album' />
      </figure>
      <div className='card-body text-white'>
        <h2 className='card-title'>{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
