// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// fetch constant variables like the url and the url path
const URL = process.env.REACT_APP_URL;
const APIPATH = PATH;  // '/api/v1/'


// creating an action to login the user
export const signInUser = createAsyncThunk('signInUser', async (loginData) => {

    // now, make the api call to login the user
    return axios.post(`${URL}${APIPATH}user/login`,
        JSON.stringify(loginData),
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {  // user logged in successfully
            toast.success(response?.data?.message || "Logged in!!");
            localStorage.setItem('auth-token', response.data['auth-token']);  // to store the token 
            return;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!")
            throw err;
        });
});

// creating an action to register the user
export const signUpUser = createAsyncThunk('signUpUser', async (data) => {

    // fetch data to register the user
    const userData = {
        fullName: data.name,
        email: data.email,
        password: data.password
    }

    // now, make the api call to register users
    return axios.post(`${URL}${APIPATH}user/register`,
        JSON.stringify(userData),
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => {
            toast.success(response?.data?.message || "User Created!");
            localStorage.setItem('auth-token', response.data['auth-token']);  // to store the token 
            return;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        });
});