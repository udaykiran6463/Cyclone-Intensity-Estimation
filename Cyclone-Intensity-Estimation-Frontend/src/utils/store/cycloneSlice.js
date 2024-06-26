import { createSlice } from '@reduxjs/toolkit';

const cycloneSlice = createSlice({
  name: 'cyclone',
  initialState: null,
  reducers: {
    addCyclone: (state, action) => {
      return action.payload;
    },
    removeCyclone: (state, action) => {
      return null;
    },
  },
});

export const { addCyclone, removeCyclone } = cycloneSlice.actions;

export default cycloneSlice.reducer;
