import React from 'react'
import './BlogCards.scss'
import {useQuery} from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import Loader from '../Loader/Loader'
import FormBelow from '../FormBelow/FormBelow'
import { Link } from 'react-router-dom'

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
    console.log(error.message)
    return <span>Error: {error.message}</span>
  }

  console.log(data.data)

  return (
    <div className='container blog-cards'>
      <div className='gapped grid-3'>
        { 
          data.data.map((item) => {
            return(
              <div key={item.id} className='blog-card'>
                <h3>{item.attributes.Title.substr(0, 60) + '...'}</h3>
                <p>Published on {item.attributes.createdAt.substr(0, 10)}</p>
                <hr />
                <div>
                  {item.attributes.Content.substr(0, 100) + '...'}
                </div>
                <Link to={`/blog/${item.id}`}>
                  <button>Read More</button>
                </Link>
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