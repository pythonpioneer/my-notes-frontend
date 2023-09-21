import axios from 'axios';
import { createContext, useContext, useEffect } from 'react';
import { useFetchNote } from "./FetchNoteContext";
import {toast} from "react-toastify";

// creating a context to add note
const AddNoteContext = createContext(null);

// now create and export a custom hook to connect with AddNoteContext
export const useAddNote = () => {
    return useContext(AddNoteContext);
};

// to make request to api, we need host
const host = process.env.REACT_APP_HOST;

// now creating a provider for all the children components
export const AddNoteProvider = (props) => {

    // fetching data from context
    const { getNotes } = useFetchNote();

    // to add note 
    const addNote = (title, description, tag) => {

        // to make api call to add note using post
        axios.post(`${host}/api/v1/notes/addnotes`,
            JSON.stringify({ title, description, tag }), {
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('auth-token'),
            },
        },
        )
            .then((response) => {
                getNotes();
                toast.success('Note added successfully')
            })
            .catch(err => {
                toast.error('Something went wrong')
                console.log(err);
            })
    };

    return (
        <AddNoteContext.Provider value={{ addNote }}>
            {props.children}
        </AddNoteContext.Provider>
    );
}