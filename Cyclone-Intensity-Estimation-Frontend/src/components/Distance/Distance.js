import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import DISTANCE_FALLBACK from '../../assets/images/distance.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const Distance = () => {
  const distance = useSelector((store) => store.cyclone?.distance);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (distance && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [distance]);

  return (
    <Card customClass='small-image bg-indigo-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Distance</div>
        <ToolTip>
          This displays the distance to be covered by cyclone to touch the
          shore.
        </ToolTip>
      </div>

      {distance && isLoading ? (
        <Loader loadingText='Distance to Shore' />
      ) : distance ? (
        <p className='text-6xl text-white text-center text-wrap whitespace-nowrap mx-auto my-10'>
          {distance}
          <span className='block text-xl'>Kms</span>
        </p>
      ) : (
        <img
          className='w-36 h-32 mx-auto'
          src={DISTANCE_FALLBACK}
          alt='Distance'
        />
      )}
    </Card>
  );
};

export default Distance;
