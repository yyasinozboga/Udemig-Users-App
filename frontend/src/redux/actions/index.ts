import {createAsyncThunk} from '@reduxjs/toolkit';
import api from '../../api';
import {User, UserDetail} from '../../types';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (): Promise<User[] | unknown> => {
    try {
      const {data} = await api.get('/users');

      return data.users;
    } catch (error) {
      console.log(error);
    }
  },
);

export const getUser = createAsyncThunk(
  'users/getUser',
  async (id: string): Promise<UserDetail | unknown> => {
    try {
      const {data} = await api.get(`/users/${id}`);

      return data.user;
    } catch (error) {
      console.log(error);
    }
  },
);

export const addUser = createAsyncThunk('users/addUser', async (user: any) => {
  try {
    const {data} = await api.post('/users', user);

    return data.user;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user: UserDetail) => {
    try {
      const {data} = await api.patch(`/users/${user.id}`, user);

      return data.user;
    } catch (error) {
      console.log(error);
    }
  },
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: string) => {
    try {
      await api.delete(`/users/${id}`);

      return id;
    } catch (error) {
      console.log(error);
    }
  },
);
