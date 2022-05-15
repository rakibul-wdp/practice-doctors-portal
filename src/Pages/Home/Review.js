import React from 'react';

const Review = ({ people }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <p className='mb-5'>{people.description}</p>
        <div className='flex items-center'>
          <div className='avatar'>
            <div className='w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={people.img} alt='' />
            </div>
          </div>
          <div className='ml-5'>
            <h4>{people.name}</h4>
            <p>{people.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
