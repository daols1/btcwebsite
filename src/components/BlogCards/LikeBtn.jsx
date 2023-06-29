import React from 'react'
import './BlogCards.scss'
import {AiTwotoneHeart, AiOutlineHeart} from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { like, unLike } from '../../redux/features/postLikeSlice'


function LikeBtn() {

    // Likes state logic
  const dispatch = useDispatch()
  const isLiked = useSelector((state) => state?.like.value.isLiked)




  return (
    <button  >
        {/* <AiOutlineHeart  /> */}
        {
          isLiked === true ?
            <AiTwotoneHeart onClick={() => dispatch(unLike())} />
          :
            <AiOutlineHeart onClick={() => dispatch(like())} />
          
        }
    </button>
  )
}

export default LikeBtn