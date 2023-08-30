import axios from 'axios';
import React, { createContext, useState, useContext, useEffect} from 'react';

// creating and exporting context 
const NoteContext = createContext(null);
export const useNote = () => {
    const note = useContext(NoteContext);
    return note;
};

// to make request to api, we need
const host = 'http://192.168.0.102:3100';


// creating provider
export const NoteProvider = (props) => {
    
    // creating all states here to access everywhere
    let [notes, setNotes] = useState([]);

    // to fetch notes from db
    const getNotes = async () => {

        // making api call
        axios.get(`${host}/api/v1/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjRiNGMwY2FhZDk4MmEyNzQxYmI4In0sImlhdCI6MTY5MzQwMzk4MH0.BMXNanTOXRue6NmILVsRwR71_zgi6PjWQ1sTCv5-zw0'
            },
        })
        .then(async (response) => {
            console.log('data', response['data']);
            // setNotes(note => response.data);
            setNotes(response.data);

            console.log('notes', notes);
        })
        .catch(err => {
            console.log(err);
            console.log("check the host network")
        });
    }

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    return (
        
        // wrapping all childrens
        <NoteContext.Provider value={{ notes, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}