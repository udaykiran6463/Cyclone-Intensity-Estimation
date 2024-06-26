import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HOME from '../../assets/images/home.png';

const ImageWithTextOverlay = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className='relative w-full h-screen'>
      <img
        src={HOME}
        alt='Descriptive Alt Text'
        className='w-full h-full object-cover'
      />
      <div className='absolute bg-black bg-opacity-50 top-0 left-0  w-full h-full'>
        <div className='p-24 w-3/4 h-2/4 flex flex-col justify-center'>
          <h1 className='text-white font-light text-5xl mb-4'>
            Cyclone Intensity Estimation
          </h1>
          <p className='text-white text-lg mb-4'>
            Developing a Convolutional Neural Network (CNN) method for
            estimating cyclone intensity using infrared band satellite images
            sourced from the INSAT-3D satellite.
          </p>
          {user && (
            <Link
              className='p-2 bg-white text-black w-fit rounded'
              to='/monitor'
            >
              Monitor Cyclone →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;
