import {configureStore} from '@reduxjs/toolkit';
import getAllUsersSlice from './slices/getAllUsersSlice';
import getUserSlice from './slices/getUserSlice';

const store = configureStore({
  reducer: {
    users: getAllUsersSlice,
    user: getUserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
