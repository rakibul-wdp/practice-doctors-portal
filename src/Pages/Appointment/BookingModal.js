import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label for='booking-modal' className='btn btn-sm btn-circle absolute right-2 top-2 bg-red-600'>
            ✕
          </label>
          <h3 className='font-bold text-xl text-center text-secondary mb-4 mt-5'>{name}</h3>
          <form className='grid grid-cols-1 gap-3 justify-items-center'>
            <input
              type='text'
              disabled
              value={format(date, 'PP')}
              className='input input-bordered w-full max-w-sm text-lg'
            />
            <select name='slot' className='select select-bordered w-full max-w-sm text-lg'>
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='input input-bordered w-full max-w-sm text-lg'
            />
            <input
              type='email'
              name='email'
              placeholder='Email Address'
              className='input input-bordered w-full max-w-sm text-lg'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone Number'
              className='input input-bordered w-full max-w-sm text-lg'
            />
            <input
              type='submit'
              value='Submit'
              className='btn btn-primary text-lg text-white font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-sm mb-5'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
