import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0,
        favoriteBooks: [] 
    },
    reducers:{
        favoriteBook(state, action){
            const bookId = action.payload;   
            state.value += 1;
            state.favoriteBooks = [...state.favoriteBooks, bookId]
        }
    }
})

export const { favoriteBook} = counterSlice.actions;
export default counterSlice.reducer;
