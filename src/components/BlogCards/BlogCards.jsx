import React from 'react'
import './BlogCards.scss'
import { useSelector, useDispatch } from 'react-redux'
import {useQuery} from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import Loader from '../Loader/Loader'
import FormBelow from '../FormBelow/FormBelow'
import { Link } from 'react-router-dom'
import {AiTwotoneHeart, AiOutlineHeart} from 'react-icons/ai'
import LikeBtn from './LikeBtn'



function BlogCards() {

  

  const {data, isLoading, isError} = useQuery({
    queryKey: ['blog-cards'],
    queryFn: fetcher,
    retry:3,
  })
    
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    console.log(isError.message)
    return <span>Error: {isError.message}</span>
  }

  console.log(data.data)




  return (
    <div className='container blog-cards'>
      <div className='gapped grid-3'>
        {isLoading ? <Loader /> :
          data.data.map((item) => {
            return(
              <div key={item.id} className='blog-card'>
                <h3>{item.attributes.title?.substring(0, 60) + '...'}</h3>
                <p>Published on {item.attributes.createdAt?.substring(0, 10)}</p>
                <hr />
                <div>
                  {item.attributes.body?.substring(0, 100) + '...'}
                </div>
                <div className='buttons'>
                  <Link to={`/blog/${item.id}`}>
                    <button>Read More</button>
                  </Link>
                  <LikeBtn />
                </div>
              </div>
            )
          })

        }
      </div>
      <FormBelow />
    </div>
  )
}

export default BlogCards