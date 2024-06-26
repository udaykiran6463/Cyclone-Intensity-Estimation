import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './BoundingBox.css';

import BOUNDING_BOX_FALLBACK from '../../assets/images/image_fallback.jpeg';
import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Carousel from '../Carousel/Carousel';

const BoundingBox = () => {
  const bounding_box_image = useSelector(
    (store) => store.cyclone?.bounding_box_image
  );
  const original_image = useSelector((store) => store.cyclone?.original_image);
  const images = [original_image, bounding_box_image];

  const [isLoading, setIsLoading] = useState(false);
  const delay = 2000;

  useEffect(() => {
    if (bounding_box_image && original_image && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [bounding_box_image, original_image]);

  return (
    <Card customClass='large-image bg-green-box'>
      <div className='mb-4 flex justify-between'>
        <div className='text-white text-base'>Bounding Box</div>
        <ToolTip>
          This displays originally uploaded image. And, confidence score and
          intensity of the cyclone in bounding box.
        </ToolTip>
      </div>

      {bounding_box_image && original_image && isLoading ? (
        <div className='card mx-auto my-24'>
          <div className='circle'></div>
          <div className='dot'></div>
          <div className='dot2'></div>
        </div>
      ) : bounding_box_image && original_image ? (
        <Carousel images={images} />
      ) : (
        <img
          className='w-full h-[93%] mx-auto'
          src={BOUNDING_BOX_FALLBACK}
          alt='Region Of Interest'
        />
      )}
    </Card>
  );
};

export default BoundingBox;
