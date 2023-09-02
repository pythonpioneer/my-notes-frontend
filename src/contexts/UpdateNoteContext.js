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
const host = 'http://192.168.0.102:3100';

// now creating a provider for all the children components
export const UpdateNoteProvider = (props) => {

    // fetching data from context
    const { notes, setNotes } = useFetchNote();

    // to update note
    const updateNote = (id, title, description, tag) => {

        // to make api call with put request
        axios.put(`${host}/api/v1/notes/updatenotes/noteid=${id}`,
            JSON.stringify({ title, description, tag }), {
            headers: {
                "Content-Type": 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjRiNGMwY2FhZDk4MmEyNzQxYmI4In0sImlhdCI6MTY5MzQwMzk4MH0.BMXNanTOXRue6NmILVsRwR71_zgi6PjWQ1sTCv5-zw0'
            },
        })
            .then((response) => {

                // find the note and update the value for frontend
                const newNotes = notes.map((note) => {
                    if(note._id === id){
                        note.title = title;
                        note.description = description;
                        note.tag = tag;
                    }
                    return note;
                });
                setNotes(newNotes);
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