import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-28'>
      <InfoCard cardTitle='Opening Hours' img={clock} bgClass='bg-gradient-to-r from-secondary to-primary' />
      <InfoCard cardTitle='Our Locations' img={marker} bgClass='bg-accent' />
      <InfoCard cardTitle='Contact Us' img={phone} bgClass='bg-gradient-to-r from-secondary to-primary' />
    </div>
  );
};

export default Info;
