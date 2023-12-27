// importing all requirements
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PATH } from '../constants';
import { toast } from "react-toastify";


// fetch constant variables like the url and the url path
const URL = process.env.REACT_APP_URL;
const APIPATH = PATH;  // '/api/v1/'

// now, create an action to fetch all the notes
export const fetchNotes = createAsyncThunk('fetchNotes', async (noteType) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // now, make the api call based on note-type
    let url = '';
    if (noteType === 'pending' || !noteType) url = `${URL}${APIPATH}notes/get-notes`;
    else if (noteType === 'completed') url = `${URL}${APIPATH}notes/get-notes?completed=true`;

    // now, call the api to fetch all notes
    return axios.get(url, {
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
        });
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
        .then(response => {
            toast.success(response?.data?.message || "Success!!");
            return response.data;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || 'Failed!!');
            throw err;
        });
});

// to mark the note as completed
export const completeNote = createAsyncThunk('completeNote', async (noteId) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // data to make the api call
    const url = `${URL}${APIPATH}notes/complete?note-id=${noteId}`;
    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };

    // now, make the api call to mark the note as completed
    return axios.patch(url, {}, config)
        .then(response => {
            toast.success(response?.data?.message || "Success!!");
            return response.data;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || 'Failed!!');
            throw err;
        });
});

// to mark the note as completed
export const undoCompletedNote = createAsyncThunk('undoCompletedNote', async (noteId) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // data to make the api call
    const url = `${URL}${APIPATH}notes/undo-complete?note-id=${noteId}`;
    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };

    // now, make the api call to mark the note as completed
    return axios.patch(url, {}, config)
        .then(response => {
            toast.success(response?.data?.message || "Success!!");
            return response.data;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || 'Failed!!');
            throw err;
        });
});

// to delete the notes
export const deleteNote = createAsyncThunk('deleteNote', async (noteId) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // data to make the api call
    const url = `${URL}${APIPATH}notes/delete?note-id=${noteId}`;
    const config = {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
    };

    // now, make the api call to delete the notes
    return axios.delete(url, config)
        .then(response => {
            toast.success(response?.data?.message || "Success!!");
            return response.data;
        })
        .catch(err => {
            toast.error(err?.response?.data?.message || 'Failed!!');
            throw err;
        });
});

// to fetch more notes as pagination
export const fetchMoreNotes = createAsyncThunk('fetchMoreNotes', async ({noteType, page}) => {

    // fetch the auth token from local storage
    const token = localStorage.getItem('auth-token');

    if (!token) {  // throw errors, if there is no token
        throw new Error("Missing Token");
    }

    // now, make the api call based on note-type
    let url = '';
    if (noteType === 'pending' || !noteType) url = `${URL}${APIPATH}notes/get-notes?page=${page}`;
    else if (noteType === 'completed') url = `${URL}${APIPATH}notes/get-notes?completed=true&page=${page}`;

    // now, call the api to fetch all notes
    return axios.get(url, {
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
        });
});
