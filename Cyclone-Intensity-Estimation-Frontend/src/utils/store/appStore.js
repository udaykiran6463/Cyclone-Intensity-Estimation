import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlice';
import cycloneReducer from './cycloneSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cyclone: cycloneReducer,
  },
});

export default appStore;
