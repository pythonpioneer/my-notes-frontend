// importing requirements
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';


// now combine all the reducers
const rootReducer = combineReducers({
    user: userReducer,
    // list all the reducers
});

// export the reducers
export default rootReducer;