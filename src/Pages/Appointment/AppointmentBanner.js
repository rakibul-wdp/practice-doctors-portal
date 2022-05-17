import React from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className='hero min-h-[70vh]' style={{ backgroundImage: `url(${background})` }}>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img src={chair} className='max-w-sm rounded-lg shadow-2xl' alt='Dentist patient chair' />
        <div
          className='mr-16'
          style={{
            boxShadow: '#19D3AE 5px 5px, #2ce6c1 10px 10px, #4bf2d1 15px 15px, #72f7dd 20px 20px, #93fae6 25px 25px',
          }}
        >
          <DayPicker mode='single' selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
