import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: null,
  reducers: {
    showToast: (state, action) => {
      return action.payload; 
    },
    clearToast: (state) => {
      return null
    },
  },
});

export const { showToast, clearToast } = toastSlice.actions;

export default toastSlice.reducer;
