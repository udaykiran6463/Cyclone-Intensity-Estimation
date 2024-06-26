import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CLASSIFICATION_FALLBACK from '../../assets/images/classification.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const Classification = () => {
  const classification = useSelector((store) => store.cyclone?.category);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (classification && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [classification]);

  return (
    <Card customClass='small-image bg-rust-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Classification</div>
        <ToolTip>
          <div className='text-center'>
            <p className='inline mr-2'>Tropical Depression (0-74)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-green-500'></div>
          </div>

          <div className='text-center'>
            <p className='inline mr-2'>Tropical Storm (75-95)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-orange-500'></div>
          </div>

          <div className='text-center'>
            <p className='inline mr-2'>Category 1 (95-111)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-red-500'></div>
          </div>

          <div className='text-center'>
            <p className='inline mr-2'>Category 2 (111-130)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-pink-500'></div>
          </div>

          <div className='text-center'>
            <p className='inline mr-2'>Category 3 (130-157)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-purple-500'></div>
          </div>

          <div className='text-center'>
            <p className='inline mr-2'>Category 4 (157-178)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-indigo-500'></div>
          </div>

          <div className='text-center'>
            <p className='inline mr-2'>Category 5 (&gt;178)</p>
            <div className='w-4 h-4 inline-block rounded-full bg-red-600'></div>
          </div>
        </ToolTip>
      </div>

      {classification && isLoading ? (
        <Loader loadingText='Classifying Cyclone' />
      ) : classification ? (
        <p className='text-3xl text-white text-center text-wrap whitespace-nowrap mx-auto my-10'>
          {classification}
        </p>
      ) : (
        <img
          className='w-36 h-32 mx-auto'
          src={CLASSIFICATION_FALLBACK}
          alt='Classification'
        />
      )}
    </Card>
  );
};

export default Classification;
