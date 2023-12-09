// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// creating an action to login the user
export const signInUser = createAsyncThunk('signInUser', async (loginData) => {

    // fetch the url and the url path
    const URL = process.env.REACT_APP_URL;
    const APIPATH = PATH;  // '/api/v1/'

    // now, make the api call to login the user
    return axios.post(`${URL}${APIPATH}user/login`,
        JSON.stringify(loginData),
        {
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(async (response) => {  // user logged in successfully
            toast.success(response?.data?.message || "Logged in!!");
            localStorage.setItem('auth-token', response.data['auth-token']);  // to store the token 
            return response.data;
        })
        .catch(err => {  // to handle errors
            toast.error(err?.response?.data?.message || "Failed!!")
            throw err;
        });
});
