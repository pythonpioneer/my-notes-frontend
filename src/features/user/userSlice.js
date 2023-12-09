// importing all requirements
import { createSlice } from '@reduxjs/toolkit';
import { signInUser } from '../../services/user';


// initial state of the user app
const initialState = {
    isLoggedIn: false,  // login status of the user
    isLoading: false,  // loading status of user logging
    hasErrors: false,  // if we encounter any errors
};

// now create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {  // if there is authentication token in the local storage then logged in the user
            state.isLoggedIn = Boolean(localStorage?.getItem('auth-token'));
        },
        logoutUser: (state) => {  // now, remove the auth token from the local storage
            
            if (localStorage?.getItem('auth-token')) {
                localStorage.clear('auth-token');
                state.isLoggedIn = false;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInUser.pending, (state) => {  // during api calls
                state.isLoading = true;
            })
            .addCase(signInUser.fulfilled, (state, action) => {  // after successfull logged in 
                state.isLoading = false;
                userSlice.caseReducers.loginUser(state, action);  // login the user
            })
            .addCase(signInUser.rejected, (state, action) => {  // if logging in failed
                state.isLoading = false;
                state.hasErrors = true;
            })
    },
});

// now export the reducers and actions
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;