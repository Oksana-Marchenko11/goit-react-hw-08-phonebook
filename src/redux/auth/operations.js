import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {

    try {
        const response = await axios.post('/users/signup', credentials);
        console.log(response);
        console.log(credentials);
        setAuthHeader(response.data.token);
        return response.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const logIn = createAsyncThunk('auth/logIn', async (credentials, thunkAPI) => {

    try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    }
    catch (error) {
        return thunkAPI(error.message)
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {

    try {
        await axios.post('/users/logout');
        clearAuthHeader()
    }
    catch (error) {
        return thunkAPI(error.message)
    }
})


