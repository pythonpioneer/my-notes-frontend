import { createContext, useContext } from "react";

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

    // writing onClick listner to delete notes
    

    // returning provider and value to all the children
    return (
        <DeleteNoteContext.Provider value={{}}>
            {props.children}
        </DeleteNoteContext.Provider>
    );
};

