import { createSlice } from "@reduxjs/toolkit";


const intialState = {
    value: {
        isLoggedIn: false,
    }
}


const loggedInSlice = createSlice({
    name: "isLoggedIn",
    intialState,
    reducers: {
      login: (state, action) => {
        state.value.isLoggedIn = action.payload;
      },
      logout: (state, action) => {
        state.value.isLoggedIn = action.payload;
      }
    }
});


export const { login, logout } = loggedInSlice.actions;
export {loggedInSlice}