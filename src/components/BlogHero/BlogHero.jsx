import React from 'react';
import './BlogHero.scss';
import {
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillYoutube,
    AiFillGithub,
} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import {fetcher} from '../../utils/fetcher';
import Loader from '../Loader/Loader.jsx'

function BlogHero() {

  const {data, isLoading, isError} = useQuery({
    queryKey: ['rrs-query'],
    queryFn: fetcher,
    retry:3,
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div className='container blog-hero'>
      <div className='glased grid-2'>
          <h1>Blog</h1>
          <div>
            <div className='footer-socials'>
                <BsFacebook color='grey' size={30} />
                <AiFillTwitterCircle color='grey' size={30} />
                <AiFillInstagram color='grey' size={30} />
                <AiFillYoutube color='grey' size={30} />
                <AiFillGithub color='grey' size={30} />
            </div>
            <p>Stay up to date with the latest PIVX news and announcements such as the new wallet upgrades, monthly development updates, exchange listings, partnerships, and more.</p>
          </div>
      </div>
      <div className='blog-rrs'>
        <div>
          <div>
            <div style={{
              background: `url(${data.data[0].attributes.imgLink})`
            }}>
              {/* <h1>BTCA v5.3.0 Wallet Release and Network Upgrade Announcement</h1> */}
              <h1>{data.data[0].attributes.Title}</h1>
            </div>
            <p>PUBLISHED AUG 28, 2021</p>
            <hr />
            <h3>BTCA v5.3.0 Wallet Release and Network Upgrade Announcement</h3>
            <p>This is a mandatory wallet upgrade with numerous new features and core improvements! Network upgrade enforcement is scheduled to take effect from block height 3,014,000, which will occur on September 10th, 2021 at approx. 15:00 UTC.</p>
          </div>
        </div>
        <div className='blog-small-side'>
          <div>
            <div>
              <h1>BTCA v5.3.0 Wallet Release and Network Upgrade Announcement</h1>
            </div>
            <p>PUBLISHED AUG 28, 2021</p>
            <hr />
            <h3>BTCA v5.3.0 Wallet Release and Network Upgrade Announcement</h3>
          </div>
          <div>
            <div>
              <h1>BTCA v5.3.0 Wallet Release and Network Upgrade Announcement</h1>
            </div>
            <p>PUBLISHED AUG 28, 2021</p>
            <hr />
            <h3>BTCA v5.3.0 Wallet Release and Network Upgrade Announcement</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHero
