import axios from 'axios';
import { createContext, useContext } from 'react';
import { useFetchNote } from "./FetchNoteContext";

// creating a context to update note
const UpdateNoteContext = createContext(null);

// create a custom context and export it
export const useUpdateNote = () => {
    return useContext(UpdateNoteContext);
};

// to make request to api, we need host
const host = process.env.REACT_APP_HOST;
console.log(process.env.REACT_APP_HOST);

// now creating a provider for all the children components
export const UpdateNoteProvider = (props) => {

    // fetching data from context
    const { getNotes } = useFetchNote();

    // to update note
    const updateNote = (id, title, description, tag) => {

        // to make api call with put request
        axios.put(`${host}/api/v1/notes/updatenotes/noteid=${id}`,
            JSON.stringify({ title, description, tag }), {
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('auth-token'),
            },
        })
            .then((response) => {
                getNotes();
            })
            .catch(err => {
                console.log(err);
                console.log("check the host network")
            });
    };

    return (
        <UpdateNoteContext.Provider value={{ updateNote }}>
            {props.children}
        </UpdateNoteContext.Provider>
    );
}