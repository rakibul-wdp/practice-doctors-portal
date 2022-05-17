import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';
import Care from './Care';

const Services = () => {
  const services = [
    {
      _id: 1,
      img: fluoride,
      name: 'Fluoride Treatment',
      description: '',
    },
    {
      _id: 2,
      img: cavity,
      name: 'Cavity Filling',
      description: '',
    },
    {
      _id: 3,
      img: whitening,
      name: 'Teeth Whitening',
      description: '',
    },
  ];
  return (
    <div>
      <div className='text-center mb-16'>
        <h3 className='text-lg text-secondary uppercase font-bold'>Our Services</h3>
        <h2 className='text-4xl'>Services We Provide</h2>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div>
        <Care />
      </div>
    </div>
  );
};

export default Services;
