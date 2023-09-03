import axios from "axios";
import { createContext, useContext } from "react";
import { useFetchNote } from "./FetchNoteContext";

// creating and exporting context
const DeleteNoteContext = createContext();

// creating custom hook and exporting it
export const useDeleteNote = () => {
    return useContext(DeleteNoteContext);
};

// to make request to api, we need host
const host = 'http://192.168.0.102:3100';

// creating provider for all the child components
export const DeleteNoteProvider = (props) => {

    // creating all states here to access everywhere

    // fetching data from context
    const { getNotes } = useFetchNote(); 

    // writing onClick listner to delete notes and getting id to delete
    const deleteNote = (id) => {

        // making an api call to delete the note
        axios.delete(`${host}/api/v1/notes/deletenotes/noteid=${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjRiNGMwY2FhZDk4MmEyNzQxYmI4In0sImlhdCI6MTY5MzQwMzk4MH0.BMXNanTOXRue6NmILVsRwR71_zgi6PjWQ1sTCv5-zw0'
            }
        })
        .then((response) => {
            getNotes();
        })
        .catch(err => {
            console.log(err);
            console.log("check the host network")
        })
    };
    

    // returning provider and value to all the children
    return (
        <DeleteNoteContext.Provider value={{ deleteNote }}>
            {props.children}
        </DeleteNoteContext.Provider>
    );
};

