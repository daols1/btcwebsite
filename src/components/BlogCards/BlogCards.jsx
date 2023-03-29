import React from 'react'
import './BlogCards.scss'
import {useQuery} from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'
import Loader from '../Loader/Loader'

function BlogCards() {

  const {data, isLoading, isError} = useQuery({
    queryKey: ['blog-cards'],
    queryFn: fetcher,
    retry:3,
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    console.log(error.message)
    return <span>Error: {error.message}</span>
  }


  return (
    <div className='container blog-cards'>
      BlogaCards
    </div>
  )
}

export default BlogCards