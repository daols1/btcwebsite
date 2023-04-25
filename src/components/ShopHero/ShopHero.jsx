import React from 'react'
import './ShopHero.scss'
import chatimg from '../../assets/shop/chatting.png'

function ShopHero() {
  return (
    <div className='container shop-hero grid-2'>
        <div>
            <h1>Shop nice images for your self</h1>
            <p>The best collection of images for you to buy and be happy!. Get yourself some jpegs and standout from the crowd Bigman!!!!</p>
        </div>
        <img src={chatimg} alt="" />
    </div>
  )
}

export default ShopHero