import React from 'react';

import ImageUpload from '../ImageUpload/ImageUpload';
import RegionOfInterest from '../RegionOfInterest/RegionOfInterest';
import BoundingBox from '../BoundingBox/BoundingBox';
import ConfidenceScore from '../ConfidenceScore/ConfidenceScore';
import Intensity from '../Intensity/Intensity';
import Classification from '../Classification/Classification';
import Distance from '../Distance/Distance';
import Time from '../Time/Time';
import ImpactRegion from '../ImpactRegion/ImpactRegion';
import CoastLine from '../CoastLine/CoastLine';
import Analytics from '../Analytics/Analytics';

const MonitorCyclone = () => {
  return (
    <>
      <h1 className='m-4 text-center text-white font-light text-4xl'>
        Cyclone Intensity Estimation
      </h1>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col'>
          <ImageUpload />
          <RegionOfInterest />
        </div>
        <div className=''>
          <BoundingBox />
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <ConfidenceScore />
            <Intensity />
          </div>
          <div className='flex'>
            <Distance />
            <Time />
          </div>
          <div className='flex'>
            <Classification />
            <CoastLine />
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='w-2/6 m-4'>
          <ImpactRegion />
        </div>
        <div className='w-4/6 m-4'>
          <Analytics />
        </div>
      </div>
    </>
  );
};

export default MonitorCyclone;
