import {screens} from '../utils/constants';

export type RootStackParamList = {
  [screens.HomeScreen]: undefined;
  [screens.DetailScreen]: {id: string};
  [screens.AddUserScreen]: {info: UserDetail} | undefined;
};

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
}

export interface UserDetail {
  id: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  gender: string;
  age: string;
}

export interface GetAllUsersType {
  isLoading: boolean;
  error: null | string;
  users: User[] | null;
}

export interface GetUserType {
  isLoading: boolean;
  error: null | string;
  user: UserDetail | null;
}

export interface UsersStore {
  users: GetAllUsersType;
}

export interface UserStore {
  user: GetUserType;
}

export interface IsChangedType {
  isChanged: boolean;
}

export interface IsChangedStore {
  isChanged: IsChangedType;
}

export interface Info {
  name: string;
  surname: string;
  phone: string;
  email: string;
  gender: string;
  age: string;
}
