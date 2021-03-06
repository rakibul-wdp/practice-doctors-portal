import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className='mb-28'>
      <h3 className='text-xl text-secondary font-bold text-center my-20'>
        Available Appointments on {format(date, 'PP')}
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment} />
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} />}
    </div>
  );
};

export default AvailableAppointments;
