import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryBtn from '../Shared/PrimaryBtn';

const MakeAppointment = () => {
  return (
    <section
      className='flex justify-center items-center mt-20 sm:p-10 md:p-0 lg:p-0 mb-28'
      style={{ background: `url(${appointment})` }}
    >
      <div className='flex-1 hidden lg:block md:block'>
        <img className='md:mt-[-100px] lg:mt-[-120px] xl:mt-[-200px]' src={doctor} alt='' />
      </div>
      <div className='text-white flex-1'>
        <h3 className='text-xl text-secondary font-bold mb-5'>Appointment</h3>
        <h2 className='text-3xl'>Make an Appointment Today</h2>
        <p className='my-5'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;
