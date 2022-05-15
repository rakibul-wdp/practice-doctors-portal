import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const Contact = () => {
  return (
    <section className='text-center py-12' style={{ background: `url(${appointment})` }}>
      <div className='mb-8'>
        <h3 className='text-secondary text-lg font-bold'>Contact Us</h3>
        <h2 className='text-3xl text-white'>Stay Connected With Us</h2>
      </div>
      <form>
        <input type='email' placeholder='Email Address' className='input input-ghost w-full max-w-sm bg-white' /> <br />
        <input type='text' placeholder='Subject' className='input input-ghost w-full max-w-sm bg-white my-4' />
        <br />
        <textarea
          rows={'4'}
          className='textarea w-full max-w-sm textarea-ghost bg-white mb-5'
          placeholder='Your message'
        ></textarea>
        <br />
        <PrimaryBtn>Submit</PrimaryBtn>
      </form>
    </section>
  );
};

export default Contact;
