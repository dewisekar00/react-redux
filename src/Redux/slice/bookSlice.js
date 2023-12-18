import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    status: " ",
    detailBook: []
  },
  reducers:{
    setStatus(state, action){
        state.status = action.payload
    },
    getBookSuccess(state, action){
        state.books = [...action.payload.data.items]
        state.status = action.payload.statusbar;
       
    },
    setdetailBook(state, action){
      state.detailBook = action.payload
    }
  },

})

export const { setStatus, getBookSuccess, setdetailBook} = bookSlice.actions;

export const getBook = () => {
    return async (dispatch) => {
        dispatch(setStatus("Loading"));
        try {
            const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=language:id');
            dispatch(getBookSuccess({ data: response.data, statusbar: "success" }));
        } catch (error) {
            dispatch(setStatus("Error"));
            console.error('Error fetching books:', error);
        }
    };
};

export default bookSlice.reducer;