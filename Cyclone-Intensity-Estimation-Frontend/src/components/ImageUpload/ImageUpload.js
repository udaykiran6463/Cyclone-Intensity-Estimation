import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addCyclone } from '../../utils/store/cycloneSlice';

import UploadIcon from '../../assets/icons/UploadIcon';

import Loader from '../Loader/Loader';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    setImage(null);

    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('cyclone_image', image);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/upload_image`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();

      setIsLoading(false);

      if (result?.error) {
        alert(result.error);
      } else {
        dispatch(addCyclone(result));
      }
    } catch (error) {
      console.error('Error uploading the image:', error);
      alert('Error uploading the image.');
    }
  };

  useEffect(() => {
    if (image) {
      handleSubmit();
    }
  }, [image]);

  return (
    <>
      <form onSubmit={handleSubmit} className='flex flex-col w-fit m-2'>
        <div className='flex text-center justify-center w-52 h-52 p-4 bg-clip-border rounded-lg border-2 border-gray-300 border-dashed bg-gradient-to-r from-[#080509] to-[#1a171c]'>
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center w-full relative p-4 text-base cursor-pointer'
          >
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              {isLoading ? (
                <Loader loadingText='Uploading Image' />
              ) : (
                <>
                  <UploadIcon />
                  <p className='mb-2 text-sm text-gray-500 dark:text-white'>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                </>
              )}
            </div>
            <input
              id='dropzone-file'
              name='cyclone_image'
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='hidden'
            />
          </label>
        </div>
      </form>
    </>
  );
};

export default ImageUpload;
