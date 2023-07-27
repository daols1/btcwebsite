import React from 'react'
import './BlogCards.scss'
import {useQuery} from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import Loader from '../Loader/Loader'
import FormBelow from '../FormBelow/FormBelow'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'



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
              <BlogCard attributes={item.attributes} key={item.id} linkId={item.id} />
            )
          })

        }
      </div>
      <FormBelow />
    </div>
  )
}

export default BlogCards