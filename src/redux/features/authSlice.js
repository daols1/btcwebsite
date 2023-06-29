import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    value: {
        isLoggedIn: false,
        loading: true,
        displayName: "John Doe",
    },
  }
  
  export const counterSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
      logIn: (state, action) => {
        state.value = {
            isLoggedIn: true,
            loading: true,
            displayName: action.payload,
        }
      },
      logOut: (state) => {
        state.value = {
            isLoggedIn: false,
            loading: false,
            displayName:"John Doe" ,
        }
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { logIn, logOut } = counterSlice.actions
  
  export default counterSlice.reducer








// // Logged in/Logged out function

// const auth = getAuth(app);
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     console.log(`a User is signed in this is id ${uid}`)
//     // ...
//   } else {
//     // User is signed out
//     console.log("This user is no longer signed")
//     // ...
//   }
// });