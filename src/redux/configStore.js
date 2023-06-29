import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import authReducer from './features/authSlice'
import likeReducer from './features/postLikeSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    like: likeReducer,
  },
})

export default store