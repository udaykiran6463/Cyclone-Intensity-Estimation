import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import IMPACT_FALLBACK from '../../assets/images/impact.jpeg';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

const ImpactRegion = () => {
  const coastline_image = useSelector(
    (store) => store.cyclone?.coastline_image
  );
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  useEffect(() => {
    if (coastline_image && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [coastline_image]);

  return (
    <Card customClass='medium-image bg-blue-box'>
      <div className='mb-4 flex justify-between items-center'>
        <div className='text-white text-base'>Impact Region</div>
        <ToolTip>
          This displays the regions that are impacted by cyclone.
        </ToolTip>
      </div>

      {coastline_image && isLoading ? (
        <Loader loadingText='Finding Cyclone Path' />
      ) : coastline_image ? (
        <img
          className='w-full h-[93%] mx-auto'
          src={`data:image/png;base64,${coastline_image}`}
          alt='Bounding Box'
        />
      ) : (
        <img
          className='w-full h-[93%] mx-auto'
          src={IMPACT_FALLBACK}
          alt='Bounding Box'
        />
      )}
    </Card>
  );
};

export default ImpactRegion;
