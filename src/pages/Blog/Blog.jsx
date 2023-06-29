import React from 'react'
import BlogCards from '../../components/BlogCards/BlogCards'
import BlogHero from '../../components/BlogHero/BlogHero'
import { useSelector, useDispatch } from 'react-redux'

function Blog() {
  return (
    <div>
      <BlogHero />
      <BlogCards />
    </div>
  )
}

export default Blog
