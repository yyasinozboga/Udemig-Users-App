import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getUser} from '../actions';
import {GetUserType, UserDetail} from '../../types';

const initialState: GetUserType = {
  isLoading: false,
  error: null,
  user: null,
};

const getUserSlice = createSlice({
  name: 'users/getUser',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserDetail>) {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getUser.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(getUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      if (payload) {
        state.error = null;
        state.user = payload as UserDetail;
      }
    });
  },
});

export const {setUser} = getUserSlice.actions;
export default getUserSlice.reducer;
