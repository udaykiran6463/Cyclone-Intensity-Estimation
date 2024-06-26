import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../utils/firebase';

import { validateEmail, validatePassword } from '../../utils/utils';

import Input from '../Input/Input';
import Button from '../Button/Button';

const Login = () => {
  const [error, setError] = useState({});

  const email = useRef(null);
  const password = useRef(null);

  const onSubmitForm = (ev) => {
    ev.preventDefault();

    const emailError = validateEmail(email.current.value);
    const passwordError = validatePassword(password.current.value);

    setError({ ...emailError, ...passwordError });

    if (Object.keys(error).length === 0) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorMessage = error.message;

          setError({
            apiErrorMessage: errorMessage,
          });
        });
    }
  };

  return (
    <>
      <div className='mx-auto my-12 p-14 top-44 left-0 right-0 lg:w-2/6 bg-gradient-to-r from-[#080509] to-[#1a171c] text-black rounded-lg bg-opacity-80'>
        <h1 className='text-2xl text-white'> Sign In </h1>
        <form className='my-4' onSubmit={(ev) => onSubmitForm(ev)}>
          <Input
            ref={email}
            inputId='email'
            inputType='text'
            labelText='Email'
            placeholderText='Enter email address'
            errorMessage={error.email}
          />
          <Input
            ref={password}
            inputId='password'
            inputType='password'
            labelText='Password'
            placeholderText='Enter password'
            errorMessage={error.password}
          />
          <Button buttonType='submit' buttonText='Sign In' className='w-full' />
        </form>

        <p className='my-2 text-sm text-red-400'>{error.apiErrorMessage}</p>

        <p className='my-2 text-sm text-slate-500'>
          New User?
          <span> </span>
          <Link to='/signup' className='text-sm text-white'>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
