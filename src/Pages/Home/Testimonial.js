import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
  const peoples = [
    {
      _id: 1,
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people1,
      name: 'Winson Herry',
      location: 'California',
    },
    {
      _id: 2,
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people2,
      name: 'Arnob Abir',
      location: 'Kotalchapor',
    },
    {
      _id: 3,
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: people3,
      name: 'Chandu Sorkar',
      location: 'Kalaivita',
    },
  ];
  return (
    <div className='mb-28'>
      <div className='flex justify-between mb-16'>
        <div>
          <h3 className='text-secondary font-bold text-lg'>Testimonial</h3>
          <h2 className='text-3xl'>What Our Patients Says</h2>
        </div>
        <div>
          <img className='lg:w-48 sm:w-24' src={quote} alt='' />
        </div>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {peoples.map((people) => (
          <Review key={people._id} people={people} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
