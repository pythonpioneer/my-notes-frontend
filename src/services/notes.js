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

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // now, call the api to fetch all notes
    return axios.get(`${URL}${APIPATH}notes/get-notes?page=`, {
        headers: {
            "auth-token": token
        }
    })
        .then(response => {  // after successfull api call, return the data
            return response.data;
        })
        .catch(err => {  // if we encounter any errors
            toast.error(err?.response?.data?.message || "Failed!!");
            throw err;
        })
});

// creating an action to add notes
export const createNote = createAsyncThunk('createNote', async ({ title, desc, category }) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // data to make the api call
    const url = `${URL}${APIPATH}notes/create`;
    const payload = JSON.stringify({ title, desc, category });
    const requestHeaders = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };

    // make the api call to add note
    return axios.post(url, payload, requestHeaders)
        .then(response => {
            toast.success(response?.data?.message || "Success!!");
            return response.data;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || 'Failed!!');
            throw err;
        });
});

// create an action to update the existing notes
export const updateNote = createAsyncThunk('updateNote', async ({ title, desc, category, noteId }) => {
    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // data to make the api call
    const url = `${URL}${APIPATH}notes/update?note-id=${noteId}`;
    const payload = JSON.stringify({ title, desc, category });
    const requestHeaders = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };

    // now, make the api call to update the note
    return axios.put(url, payload, requestHeaders)
        .then()
        .catch();
});