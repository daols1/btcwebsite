import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './utils/firebase.js'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
  }
  
  export const counterSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
      logIn: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      logOut: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default counterSlice.reducer








// Logged in/Logged out function

const auth = getAuth(app);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log(`a User is signed in this is id ${uid}`)
    // ...
  } else {
    // User is signed out
    console.log("This user is no longer signed")
    // ...
  }
});