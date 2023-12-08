// importing all requirements to setup the store
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/rootReducers';


// now create the store
const store = configureStore({
    reducer: rootReducer,
});

// now export the store
export default store;