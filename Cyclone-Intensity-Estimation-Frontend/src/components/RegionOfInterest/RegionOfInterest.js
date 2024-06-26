import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ROI_IMAGE_FALLBACK from '../../assets/images/roi.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const RegionOfInterest = () => {
  const roi_image = useSelector((store) => store.cyclone?.roi_image);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 3000;

  useEffect(() => {
    if (roi_image && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [roi_image]);

  return (
    <Card customClass='small-image bg-bronze-box'>
      <div className='mb-4 flex justify-between items-center'>
        <div className='text-white text-base'>Region Of Interest</div>
        <ToolTip>
          This displays cyclone region detected and extracted by model from
          given image.
        </ToolTip>
      </div>
      {roi_image && isLoading ? (
        <Loader loadingText='Detecting Cyclone' />
      ) : roi_image ? (
        <img
          className='w-36 h-32 mx-auto'
          src={`data:image/png;base64,${roi_image}`}
          alt='Region Of Interest'
        />
      ) : (
        <img
          className='w-36 h-32 mx-auto'
          src={ROI_IMAGE_FALLBACK}
          alt='Region Of Interest'
        />
      )}
    </Card>
  );
};

export default RegionOfInterest;
