import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './StateReducers/DataStateReducer';
const store = configureStore({
    reducer: {
        DataReducer, SelectDataReducer
    }
})
export default store;