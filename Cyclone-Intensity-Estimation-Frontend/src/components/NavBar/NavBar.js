import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../utils/firebase';
import { addUser, removeUser } from '../../utils/store/userSlice';

import logo from '../../assets/images/logo.png';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className='px-12 py-2 flex items-center justify-between text-white bg-gradient-to-r from-[#080509] to-[#1a171c]'>
      <img className='px-8 py-2 w-32' src={logo} alt='Netflix' />
      <ul className='mr-2 flex items-center justify-between'>
        <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
          <Link to='/'> Home </Link>
        </li>
        {!user && (
          <>
            <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
              <Link to='/login'> Login </Link>
            </li>
            <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
              <Link to='/signup'> Sign Up </Link>
            </li>
          </>
        )}
        {user && (
          <>
            {/* <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
              <Link to='/monitor'> Monitor Cyclone </Link>
            </li> */}
            <li className='mr-2 px-4 py-2 hover:bg-slate-50 hover:text-black'>
              <Link onClick={onClickSignOut}> Logout </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
