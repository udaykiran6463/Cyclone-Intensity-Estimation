import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TIME_FALLBACK from '../../assets/images/time.avif';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const Time = () => {
  const time = useSelector((store) => store.cyclone?.time);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (time && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <Card customClass='small-image bg-blue-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Time</div>
        <ToolTip>This displays the time for cyclone to reach shore.</ToolTip>
      </div>

      {time && isLoading ? (
        <Loader loadingText='Time to Shore' />
      ) : time ? (
        <p className='text-6xl text-white text-center text-wrap whitespace-nowrap mx-auto my-10'>
          {time}
          <span className='block text-xl'>Hrs</span>
        </p>
      ) : (
        <img className='w-36 h-32 mx-auto' src={TIME_FALLBACK} alt='time' />
      )}
    </Card>
  );
};

export default Time;
