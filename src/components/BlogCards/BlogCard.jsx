import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AiTwotoneHeart, AiOutlineHeart} from 'react-icons/ai'
import { like, unLike } from '../../redux/features/postLikeSlice'
import { Link } from 'react-router-dom'

const BlogCard = ({attributes, linkId}) => {

  // Likes state logic
  const dispatch = useDispatch()
  const isLiked = useSelector((state) => state?.like.value.isLiked)

  // const [like, setLike] = useState(false)



  return (
    <div className='blog-card'>
      <h3>{attributes.title?.substring(0, 60) + '...'}</h3>
      <p>Published on {attributes.createdAt?.substring(0, 10)}</p>
      <hr />
      <div>
        {attributes.body?.substring(0, 100) + '...'}
      </div>
      <div className='buttons'>
        <Link to={`/blog/${linkId}`}>
          <button>Read More</button>
        </Link>
        <button  >
            {
              isLiked === true ?
                <AiTwotoneHeart /*onClick={() => setLike(false)}*/ onClick={() => dispatch(unLike())} />
              :
                <AiOutlineHeart /*onClick={() => setLike(true)}*/ onClick={() => dispatch(like())} />
              
            }
        </button>
        {/* <LikeBtn like={() => dispatch(like())} unlike={() => dispatch(unLike())} isLiked={isLiked} /> */}
      </div>
    </div>
  )
}

export default BlogCard