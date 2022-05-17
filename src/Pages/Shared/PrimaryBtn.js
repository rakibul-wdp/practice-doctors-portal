import React from 'react';

const PrimaryBtn = ({ children }) => {
  return (
    <button className='btn btn-primary text-lg uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'>
      {children}
    </button>
  );
};

export default PrimaryBtn;
