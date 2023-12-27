// importing all requirements
import { createSlice } from '@reduxjs/toolkit';
import { completeNote, createNote, deleteNote, fetchNotes, undoCompletedNote, updateNote, fetchMoreNotes } from '../../services/notes';


// global states of the notes
const initialState = {
    notes: [],  // stores all the notes data
    isLoading: false,  // loading status of user logging
    hasErrors: false,  // if we encounter any errors
    totalNotes: 0,
    noteType: 'pending',
    currPage: 2,
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
        },
        setTotalNotes: (state, action) => {
            state.totalNotes = action.payload;
        },
        setCurrPage: (state, action) => {  // to maintain the page for pagination
            state.currPage = action.payload;
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

            // complete notes
            .addCase(completeNote.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(completeNote.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                
                // remove the completed note
                state.notes = state.notes.filter(note => note._id !== action.payload.noteId);
            })
            .addCase(completeNote.rejected , (state, action) => {  // we will handle errors later
                state.isLoading = false;
                state.hasErrors = true;
            })

            // undo completed notes
            .addCase(undoCompletedNote.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(undoCompletedNote.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                
                // remove the completed note
                state.notes = state.notes.filter(note => note._id !== action.payload.noteId);
            })
            .addCase(undoCompletedNote.rejected , (state, action) => {  // we will handle errors later
                state.isLoading = false;
                state.hasErrors = true;
            })

            // delete notes
            .addCase(deleteNote.pending , (state) => {
                state.isLoading = true;
                state.hasErrors = false;
            })
            .addCase(deleteNote.fulfilled , (state, action) => {
                state.isLoading = false;
                state.hasErrors = false;
                
                // remove the deleted note
                state.notes = state.notes.filter(note => note._id !== action.payload.noteId);
            })
            .addCase(deleteNote.rejected , (state, action) => {  // we will handle errors later
                state.isLoading = false;
                state.hasErrors = true;
            })

            // fetching more notes using pagination
            .addCase(fetchMoreNotes.pending , () => {
                // no contents, loading handled by infinite scroll loader
            })
            .addCase(fetchMoreNotes.fulfilled , (state, action) => {
                state.hasErrors = false;
                state.notes = [...state.notes, ...action.payload.notes];
            })
            .addCase(fetchMoreNotes.rejected , (state, action) => {  // we will handle errors later
                state.hasErrors = true;
            })
    }
});

// now, export all the reducers and actions
export const { removeNotes, updateNoteType, setTotalNotes, setCurrPage } = noteSlice.actions;
export default noteSlice.reducer;