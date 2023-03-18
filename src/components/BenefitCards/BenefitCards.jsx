import React, { useSate } from 'react'
import { Link } from 'react-router-dom'
import './BenefitCards.scss'
import c1 from '../../assets/home/c1.png'
import c2 from '../../assets/home/c2.png'
import c3 from '../../assets/home/c3.png'

function BenefitCards() {
  return (
    <div className='container main-cards'>
        <div className='card-divs grid-3'>
          <div className='card card-1'>
            <p>Help secure the network</p>
            <h3>And get rewarded</h3>
            <p>An improbable, overnight rise has established a new token as a blockchain gaming heavyweight.</p>
            <Link className='btn bg-green' >Go and get</Link>
            <img src={c1} />
          </div>
          <div className='card card-2'>
            <p>Help secure the network</p>
            <h3>And get rewarded</h3>
            <p>An improbable, overnight rise has established a new token as a blockchain gaming heavyweight.</p>
            <Link className='btn bg-green' >Go and get</Link>
            <img src={c2} />
          </div>
          <div className='card card-3'>
            <p>Help secure the network</p>
            <h3>And get rewarded</h3>
            <p>An improbable, overnight rise has established a new token as a blockchain gaming heavyweight.</p>
            <Link className='btn bg-green' >Go and get</Link>
            <img src={c3} />
          </div>
        </div>
    </div>
  )
}

export default BenefitCards