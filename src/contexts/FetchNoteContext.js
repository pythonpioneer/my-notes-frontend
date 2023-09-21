import axios from 'axios';
import React, { createContext, useState, useContext, useEffect} from 'react';

// creating and exporting context using custom-hook
const FetchNoteContext = createContext(null);
export const useFetchNote = () => {
    return useContext(FetchNoteContext);
};

// to make request to api, we need host
const host = process.env.REACT_APP_HOST;
console.log(process.env.REACT_APP_HOST);


// creating provider
export const FetchNoteProvider = (props) => {
    
    // creating all states here to access everywhere
    const [notes, setNotes] = useState([]);

    // to fetch notes from db
    const getNotes = async () => {

        // making api call to fetch note
        axios.get(`${host}/api/v1/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "auth-token": localStorage.getItem('auth-token'),
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
        if(localStorage.getItem('auth-token'))
            getNotes();
        // eslint-disable-next-line
    }, []);

    return (
        
        // wrapping all childrens
        <FetchNoteContext.Provider value={{ notes, setNotes, getNotes }}>
            {props.children}
        </FetchNoteContext.Provider>
    );
}