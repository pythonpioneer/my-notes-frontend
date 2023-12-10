// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// fetch constant variables like the url and the url path
const URL = process.env.REACT_APP_URL;
const APIPATH = PATH;  // '/api/v1/'

// now, create an action to fetch all the notes
export const fetchNotes = createAsyncThunk('fetchNotes', async () => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');
    if (!token) {
        toast.error("Missing Token!");
        throw err;
    }

    // now, call the api to fetch all notes
    return axios.get(`${URL}${APIPATH}notes/get-notes?page=`, {
        headers: {
            "auth-token": token
        }
    })
        .then(response => {
            console.log("res", response);
            return response.data;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        })
})