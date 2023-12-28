// importing all requirements
import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from '../../services/user';
import { toast } from "react-toastify";


// initial state of the user app
const initialState = {
    isLoggedIn: false,  // login status of the user
    isLoading: false,  // loading status of user logging
    hasErrors: false,  // if we encounter any errors
    themeStatus: '',  // we will set the theme after confirming that the browser don't have theme status saved
};

// now create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state) => {  // if there is authentication token in the local storage then logged in the user
            state.isLoggedIn = Boolean(localStorage?.getItem('auth-token'));
        },
        logoutUser: (state) => {  // now, remove the auth token from the local storage
            
            if (localStorage?.getItem('auth-token')) {
                toast.success("User Logged Out!!");  // notify the user
                localStorage.clear('auth-token', 'note-app-theme');
                state.isLoggedIn = false;
            }
        },
        toggleThemeStatus: (state, action) => {  // to change the theme of the app, record this in local storage for browsers.
            state.themeStatus = action.payload;
            localStorage.setItem('note-app-theme', action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            // to login the user
            .addCase(signInUser.pending, (state) => {  // during api calls
                state.isLoading = true;
            })
            .addCase(signInUser.fulfilled, (state, action) => {  // after successfull logged in 
                state.isLoading = false;
                state.hasErrors = false;
                userSlice.caseReducers.loginUser(state, action);  // login the user
            })
            .addCase(signInUser.rejected, (state, action) => {  // if logging in failed, handle error later
                state.isLoading = false;
                state.hasErrors = true;
            })

            // to register a new user
            .addCase(signUpUser.pending, (state) => {  
                state.isLoading = true;
            })
            .addCase(signUpUser.fulfilled, (state, action) => { 
                state.isLoading = false;
                userSlice.caseReducers.loginUser(state, action);  
            })
            .addCase(signUpUser.rejected, (state, action) => { 
                state.isLoading = false;
                state.hasErrors = true;
            })
    },
});

// now export the reducers and actions
export const { loginUser, logoutUser, toggleThemeStatus } = userSlice.actions;
export default userSlice.reducer;