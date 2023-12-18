import { configureStore } from "@reduxjs/toolkit";
import counter from './slice/counter-slice'
import book from './slice/bookSlice'

const store = configureStore({
    reducer:{
        counter,
        book,
    }
});
export default store;