import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ANALYTICS_FALLBACK from '../../assets/images/analytics.png';

import Card from '../Card/Card';
import ToolTip from '../ToolTip/ToolTip';
import Loader from '../Loader/Loader';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
);

const Analytics = () => {
  const int_max = useSelector((store) => store.cyclone?.int_max);
  const int_min = useSelector((store) => store.cyclone?.int_min);
  const intensity = useSelector((store) => store.cyclone?.intensity);
  const [isLoading, setIsLoading] = useState(false);
  const delay = 4000;

  // const int_max = [
  //   100, 120, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  // ];
  // const int_min = [50, 20, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
  // const intensity = 107;
  const data = {
    labels: [
      2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
      2021, 2022, 2023,
    ],
    datasets: [
      {
        label: 'Max Intensity',
        data: int_max,
        borderColor: '#83cfeb',
        type: 'line',
        yAxisID: 'y',
      },
      {
        label: 'Min Intensity',
        data: int_min,
        borderColor: '#d49ff1',
        type: 'line',
        yAxisID: 'y',
      },
      {
        label: 'Intensity 2023',
        data: Array(14).fill(null).concat(intensity), // Filling the array with nulls for years other than 2023
        backgroundColor: '#b1c2fc',
        type: 'bar',
        yAxisID: 'y',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      x: {
        type: 'category',
        labels: [
          '2009',
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
        ],
      },
    },
  };

  useEffect(() => {
    if (int_max && int_min && !isLoading) setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [int_max && int_min]);

  return (
    <Card customClass='h-[32rem] bg-white-box'>
      <div className='mb-4 flex flex-row-reverse justify-between items-center'>
        <div className='text-white text-base'>Analytics</div>
        <ToolTip>This section displays analytics of the cyclone.</ToolTip>
      </div>

      {int_max && int_min && isLoading ? (
        <Loader loadingText='Fetching Analytics' />
      ) : int_max && int_min ? (
        <Chart
          className='mx-auto my-8 w-full bg-white'
          type='bar'
          data={data}
          options={options}
        />
      ) : (
        <img
          className='w-full h-[93%] mx-auto'
          src={ANALYTICS_FALLBACK}
          alt='Bounding Box'
        />
      )}
    </Card>
  );
};

export default Analytics;
