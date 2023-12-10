// importing all requirements
import { createSlice } from '@reduxjs/toolkit';
import { fetchNotes } from '../../services/notes'


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
        setNotes: (state, action) => {
            // state.notes = action.notes
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotes.pending , (state, action) => {
                state.isLoading = true;
                console.log("pen")
            })
            .addCase(fetchNotes.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                console.log("ful")
            })
            .addCase(fetchNotes.rejected , (state, action) => {
                state.isLoading = false;
                state.hasErrors = true;
                console.log("rej")
            })
    }
});

// now, export all the reducers and actions
export const { setNotes } = noteSlice.actions;
export default noteSlice.reducer;