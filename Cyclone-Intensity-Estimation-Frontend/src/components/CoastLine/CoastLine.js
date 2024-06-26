import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import COAST_LINE_FALLBACK from '../../assets/images/coastline.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const CoastLine = () => {
  const coastline = useSelector((store) => store.cyclone?.coastline);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (coastline && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [coastline]);

  return (
    <Card customClass='small-image bg-turquoise-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Coast Line</div>
        <ToolTip>
          This displays the confidence score of the model about the results.
        </ToolTip>
      </div>

      {coastline && isLoading ? (
        <Loader loadingText='Finding effecting Coast' />
      ) : coastline ? (
        <p className='text-3xl text-white text-center mx-auto my-8'>
          {coastline}
        </p>
      ) : (
        <img
          className='w-36 h-32 mx-auto'
          src={COAST_LINE_FALLBACK}
          alt='Confidence Score'
        />
      )}
    </Card>
  );
};

export default CoastLine;
