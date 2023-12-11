// importing all requirements
import { createSlice } from '@reduxjs/toolkit';
import { createNote, fetchNotes, updateNote } from '../../services/notes';


// global states of the notes
const initialState = {
    notes: [],  // stores all the notes data
    isLoading: false,  // loading status of user logging
    hasErrors: false,  // if we encounter any errors
    noteType: 'pending',
};

// now, create the note slice
const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        removeNotes: (state) => {  // generally used, when user logged out
            state.notes = [];  // here we are removing all notes
        },
        updateNoteType: (state, action) => {
            state.noteType = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder

            // fetching notes
            .addCase(fetchNotes.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
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
                state.hasErrors = false;
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

            // updating notes
            .addCase(updateNote.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(updateNote.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                
                // remove the old note and add the new note
                state.notes = state.notes.filter(note => note._id !== action.payload.notes._id);
                state.notes = [action.payload.notes, ...state.notes];
            })
            .addCase(updateNote.rejected , (state, action) => {  // we will handle errors later
                state.isLoading = false;
                state.hasErrors = true;
            })
    }
});

// now, export all the reducers and actions
export const { removeNotes, updateNoteType } = noteSlice.actions;
export default noteSlice.reducer;