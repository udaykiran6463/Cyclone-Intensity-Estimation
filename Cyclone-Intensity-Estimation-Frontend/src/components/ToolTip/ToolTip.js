import React from 'react';

import InfoIcon from '../../assets/icons/info.svg';

const Tooltip = ({ children }) => {
  return (
    <div className='group relative inline-block'>
      <img className='cursor-pointer' src={InfoIcon} alt='Info' />
      <div className='absolute z-10 w-96 p-2 -mt-24 text-black bg-[#fff] rounded-lg text-center left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 invisible group-hover:visible'>
        {children}
        <div className='absolute top-full left-1/2 transform -translate-x-1/2'>
          <div className='w-0 h-0 border-8 border-transparent border-t-white'></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
