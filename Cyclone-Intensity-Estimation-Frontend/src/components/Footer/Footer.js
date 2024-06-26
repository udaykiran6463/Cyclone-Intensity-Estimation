import React from 'react';

const Footer = () => {
  return (
    <div className='p-4 z-10 flex justify-around items-center bg-gradient-to-r from-[#080509] to-[#1a171c]'>
      <p className='text-slate-50'>© 19PW4CS06 Master Project Phase-II</p>
      <ul className='mr-2 flex justify-between'>
        <li className='mr-6 cursor-pointer text-slate-50 hover:text-slate-600'>
          Cyclone Intensity Estimation
        </li>
        <li className='mr-6 cursor-pointer text-slate-50 hover:text-slate-600'>
          Team B-12
        </li>
      </ul>
    </div>
  );
};

export default Footer;
