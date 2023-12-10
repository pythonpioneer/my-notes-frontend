// importing all requirements
import { createSlice } from '@reduxjs/toolkit';
import { createNote, fetchNotes } from '../../services/notes';


// global states of the notes
const initialState = {
    notes: [],  // stores all the notes data
    isLoading: false,  // loading status of user logging
    hasErrors: false,  // if we encounter any errors
};

// now, create the note slice
const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        removeNotes: (state) => {
            state.notes = [];  // here we are removing all notes
        }
    },
    extraReducers: (builder) => {
        builder

            // fetching notes
            .addCase(fetchNotes.pending , (state) => {
                state.isLoading = true;
            })
            .addCase(fetchNotes.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                state.notes = action.payload.notes;
            })
            .addCase(fetchNotes.rejected , (state, action) => {  // we will handle errors later
                state.isLoading = false;
                state.hasErrors = true;
            })

            // adding notes
            .addCase(createNote.pending , (state) => {
                state.isLoading = true;
            })
            .addCase(createNote.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                state.notes = [action.payload.notes, ...state.notes]; 
            })
            .addCase(createNote.rejected , (state, action) => {  // we will handle errors later
                state.isLoading = false;
                state.hasErrors = true;
            })
    }
});

// now, export all the reducers and actions
export const { removeNotes } = noteSlice.actions;
export default noteSlice.reducer;