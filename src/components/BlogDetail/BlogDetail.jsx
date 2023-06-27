import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { useQuery } from '@tanstack/react-query'
import { fetcher } from '../../utils/fetcher'

import './BlogDetail.scss'
import axios from 'axios'
import Loader from '../Loader/Loader'

function BlogDetail() {

  // Fetch for smilarities
  
  const {data} = useQuery({
    queryKey: ['blog-cards'],
    queryFn: fetcher,
    retry:3,
  })
  
//   Fetch logic for major post
  const {blogId} = useParams()
  const [datas, setdatas] = useState({})
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    // fetchBlog ()
    fetch(`http://localhost:1337/api/blogs/${blogId}`)
      .then(res => res.json())
      .then(data => {
        setdatas(data.data)
        setIsLoading(false)
      })
  },[])
  
  if (isLoading) {
    return <Loader />
  }


  return (
    <div className='container blog-detail'>
        <div>
            <img src={datas.attributes.file} alt="" />
            <h1>{ datas.attributes.title }</h1>
            <p>{ datas.attributes.body  }</p>
            <h2>Check out some similar Posts</h2>
            {
              data.data.map(post => {
                return (
                  <div key={post.id} className='similar-cards'>
                    <h3>{ post.attributes.title.substr(0, 20) + '...' }</h3>
                    <p>{ post.attributes.body.substr(0, 100) + '...' }</p>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default BlogDetail