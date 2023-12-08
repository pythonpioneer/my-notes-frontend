// importing all requirements
import { createSlice } from '@reduxjs/toolkit';


// initial state of the user app
const initialState = {
    isLoggedIn: false,  // login status of the user
};

// now create the user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state, action) => {
            state.isLoggedIn = false;
        },
    }
});

// now export the reducers and actions
export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;