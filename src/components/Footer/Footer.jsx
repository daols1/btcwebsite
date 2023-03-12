import React from 'react'
import './Footer.scss'
import { 
  AiFillAndroid, 
  AiFillApple, 
  AiFillWindows, 
  AiFillTwitterCircle, 
  AiFillInstagram, 
  AiFillYoutube, 
  AiFillGithub
} from 'react-icons/ai'
import { DiLinux } from 'react-icons/di'
import { BsFacebook } from 'react-icons/bs'

function Footer() {
  return (
  <>
    <div className='container footer'>
      <div>
        <h3>BTCA</h3>
        <ul>
          <li>Advanced Proof of Stake</li>
          <li>Cold staking</li>
          <li>Privacy Shield</li>
          <li>Downloads</li>
          <li>Masternodes</li>
          <li>Merchants</li>
          <li>Exchanges</li>
        </ul>
      </div>
      <div>
        <h3>Resources</h3>
        <ul>
          <li>News</li>
          <li>Desktop Application</li>
          <li>Mobile app</li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
        <ul>
          <li>FAQ</li>
          <li>Support</li>
          <li>Community</li>
          <li>Why BTCA</li>
          <li>About BTCA</li>
        </ul>
      </div>
      <div>
        <h3>Documentation</h3>
        <ul>
          <li>Documentation</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Legal Notices</li>
        </ul>
      </div>
      <div className='footer-last-side'>
        <div>
          <AiFillAndroid color='grey' size={30} />
          <AiFillApple color='grey' size={30} />
          <DiLinux color='grey' size={30} />
          <AiFillWindows color='grey' size={30} />
        </div>
        <p>
          BTCA is an open source, decentralized, peer-to-peer currency featuring advanced privacy features
        </p>
        <div className='footer-socials'>
          <BsFacebook color='grey' size={30} />
          <AiFillTwitterCircle color='grey' size={30} />
          <AiFillInstagram color='grey' size={30} />
          <AiFillYoutube color='grey' size={30} />
          <AiFillGithub color='grey' size={30} />
        </div>
      </div>
    </div>
    <div className='footnote container'>
        <p>Hello there! hope this work looks and feels nice to use</p>
        <p>Was developed by David Ladipo</p>
    </div>
  </>
  )
}

export default Footer