import {GetAllUsersType, User} from '../../types';
import {addUser, deleteUser, getAllUsers, updateUser} from './../actions/index';
import {createSlice} from '@reduxjs/toolkit';

const initialState: GetAllUsersType = {
  isLoading: false,
  error: null,
  users: null,
};

const getAllUsersSlice = createSlice({
  name: 'users/getAllUsers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllUsers.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(getAllUsers.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(getAllUsers.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      if (payload) {
        state.error = null;
        state.users = payload as User[];
      }
    });

    builder.addCase(addUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(addUser.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(addUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      if (payload) {
        state.error = null;
        state.users?.push(payload);
      }
    });

    builder.addCase(updateUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(updateUser.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(updateUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      if (payload) {
        state.error = null;
        const findIndex: number | undefined = state.users?.findIndex(
          user => user.id === payload.id,
        );
        if (findIndex && findIndex !== -1) {
          state.users?.splice(findIndex, 1, payload);
        }
      }
    });

    builder.addCase(deleteUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.rejected, (state, {error}) => {
      state.isLoading = false;
      state.error = error.message as string;
    });

    builder.addCase(deleteUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      if (payload) {
        state.error = null;
        const findIndex: number | undefined = state.users?.findIndex(
          user => user.id === payload,
        );
        if (findIndex && findIndex !== -1) {
          state.users?.splice(findIndex, 1);
        }
      }
    });
  },
});

export default getAllUsersSlice.reducer;
