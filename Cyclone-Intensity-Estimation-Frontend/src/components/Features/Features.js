import React from 'react';

import Card from '../Card/Card';

const Features = () => {
  return (
    <>
      <h1 className='absolute px-24 py-10 my-[-25%] text-4xl font-light text-white'>
        Features
      </h1>
      <div className='absolute mx-44 my-[-19%] z-10 flex flex-wrap justify-around items-center'>
        <Card customClass='small-card bg-bronze-box flex justify-center items-center'>
          <p className='text-white'>Detecing Cyclone</p>
        </Card>
        <Card customClass='small-card bg-white-box flex justify-center items-center'>
          <p className='text-white'>Confidence Score</p>
        </Card>
        <Card customClass='small-card bg-red-box flex justify-center items-center'>
          <p className='text-white'>Intensity of Cyclone</p>
        </Card>
        <Card customClass='small-card bg-indigo-box flex justify-center items-center'>
          <p className='text-white'>Classifying Cyclone</p>
        </Card>
        <Card customClass='small-card bg-yellow-box flex justify-center items-center'>
          <p className='text-white'>Distance and Time</p>
        </Card>
        <Card customClass='small-card bg-blue-box flex justify-center items-center'>
          <p className='text-white'>Effecting Coastline</p>
        </Card>
        <Card customClass='small-card bg-turquoise-box flex justify-center items-center'>
          <p className='text-white'>Analytics</p>
        </Card>
      </div>
    </>
  );
};

export default Features;
