import React, { useState } from 'react';

import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 500);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setAnimate(false);
    setTimeout(() => setAnimate(true), 500);
  };

  return (
    <div className='relative flex justify-center items-center'>
      <button
        onClick={goToPrevious}
        className='absolute left-0 z-10 bg-gray-200 p-2 rounded-full'
      >
        {'<'}
      </button>
      <img
        style={{ animation: 'fadeIn 0.5s' }}
        className={`w-[80%] ${
          animate ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
        src={`data:image/png;base64,${images[currentIndex]}`}
        alt={`Slide ${currentIndex}`}
      />
      <button
        onClick={goToNext}
        className='absolute right-0 z-10 bg-gray-200 p-2 rounded-full'
      >
        {'>'}
      </button>
    </div>
  );
};

export default Carousel;
