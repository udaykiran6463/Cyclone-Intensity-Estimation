import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import INTENSITY_FALLBACK from '../../assets/images/intensity.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const ConfidenceScore = () => {
  const intensity = useSelector((store) => store.cyclone?.intensity);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (intensity && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [intensity]);

  return (
    <Card customClass='small-image bg-red-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Intensity</div>
        <ToolTip>
          This displays the speed at which the cyclone is moving.
        </ToolTip>
      </div>

      {intensity && isLoading ? (
        <Loader loadingText='Calculating Intensity' />
      ) : intensity ? (
        <p className='text-6xl text-white text-center mx-auto my-8'>
          {intensity}
          <span className='block text-xl'>Kmph</span>
        </p>
      ) : (
        <img
          className='w-36 h-32 mx-auto'
          src={INTENSITY_FALLBACK}
          alt='Intensity'
        />
      )}
    </Card>
  );
};

export default ConfidenceScore;
