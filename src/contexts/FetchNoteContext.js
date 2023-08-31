import axios from 'axios';
import React, { createContext, useState, useContext, useEffect} from 'react';

// creating and exporting context using custom-hook
const FetchNoteContext = createContext(null);
export const useFetchNote = () => {
    return useContext(FetchNoteContext);
};

// to make request to api, we need host
const host = 'http://192.168.173.226:3100';


// creating provider
export const FetchNoteProvider = (props) => {
    
    // creating all states here to access everywhere
    let [notes, setNotes] = useState([]);

    // to fetch notes from db
    const getNotes = async () => {

        // making api call to fetch note
        axios.get(`${host}/api/v1/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjRiNGMwY2FhZDk4MmEyNzQxYmI4In0sImlhdCI6MTY5MzQwMzk4MH0.BMXNanTOXRue6NmILVsRwR71_zgi6PjWQ1sTCv5-zw0`
            },
        })
        .then(async (response) => {
            // setNotes(note => response.data);
            setNotes(response.data);
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
        <FetchNoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </FetchNoteContext.Provider>
    );
}