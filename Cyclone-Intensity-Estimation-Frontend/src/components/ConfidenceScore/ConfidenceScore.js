import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import CONFIDENCE_SCORE_FALLBACK from '../../assets/images/confidence.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const ConfidenceScore = () => {
  const confidence_score = useSelector(
    (store) => store.cyclone?.confidence_score
  );
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (confidence_score && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [confidence_score]);

  return (
    <Card customClass='small-image bg-yellow-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Confidence Score</div>
        <ToolTip>
          This displays the confidence score of the model about the results.
        </ToolTip>
      </div>

      {confidence_score && isLoading ? (
        <Loader loadingText='Being Confident' />
      ) : confidence_score ? (
        <p className='text-6xl text-white text-center mx-auto my-8'>
          {confidence_score}
        </p>
      ) : (
        <img
          className='w-36 h-32 mx-auto'
          src={CONFIDENCE_SCORE_FALLBACK}
          alt='Confidence Score'
        />
      )}
    </Card>
  );
};

export default ConfidenceScore;
