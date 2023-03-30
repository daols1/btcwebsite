import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'

import './BlogDetail.scss'
import axios from 'axios'
import Loader from '../Loader/Loader'

function BlogDetail() {

//   Fetch logic for major post
  const {blogId} = useParams()
  const [data, setdata] = useState({})
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    // fetchBlog ()
    fetch(`http://localhost:1337/api/blogs/${blogId}`)
      .then(res => res.json())
      .then(data => {
        setdata(data.data)
        setIsLoading(false)
      })
  },[])
  
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className='container blog-detail'>
        <div>
            <h1>{ data.attributes.Title }</h1>
            <p>{ data.attributes.Content  }</p>
        </div>
    </div>
  )
}

export default BlogDetail