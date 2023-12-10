// importing requirements
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import noteReducer from '../features/notes/noteSlice';


// now combine all the reducers
const rootReducer = combineReducers({
    user: userReducer,
    notes: noteReducer,
    // list all the reducers
});

// export the reducers
export default rootReducer;