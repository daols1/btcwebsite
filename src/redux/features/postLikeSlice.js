import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        isLiked: false,
        likeCount: 0,
    },
  }

export const postLikeSlice  = createSlice({
    name: "postLiked",
    initialState,
    reducers:{
        like: (state, action) => {
            state.value = {
                isLiked: true,
                likeCount: state.value.likeCount++,
            }
        },
        unLike: (state, action) => {
            state.value = {
                isLiked: false,
                likeCount: state.value.likeCount--,
            }
        }
    }

})

export const { like, unLike } = postLikeSlice.actions
  
export default postLikeSlice.reducer