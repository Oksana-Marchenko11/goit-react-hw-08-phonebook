import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Можна робити так, якщо використовувати просто axios,а не axios instance:

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'
// const setAuthHeader = token => {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// }
// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
// }

// export const register = createAsyncThunk('auth/register', async (formData, thunkAPI) => {

//     try {
//         const response = await axios.post('/users/signup', formData);
//         setAuthHeader(response.data.token);
//         return response.data
//     }
//     catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });

export const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setAuthHeader = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      alert('Please check the entered data');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/users/login', formData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await authInstance.post('/users/logout');
    clearAuthHeader();
    return;
  } catch (error) {
    return thunkAPI(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue('You dont have a token');

    try {
      setAuthHeader(token);
      const { data } = await authInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI(error.message);
    }
  }
);
