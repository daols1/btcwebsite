import React from 'react'
import './Companies.scss'
import google from '../../assets/home/partners/google.png'
import yahoo from '../../assets/home/partners/yahoo.png'
import yandex from '../../assets/home/partners/yandex.png'
import xwc from '../../assets/home/partners/xwc.png'
import ods from '../../assets/home/partners/ods.png'
import nas from '../../assets/home/partners/nas.png'
import ambdev from '../../assets/home/partners/ambdev.png'
import group from '../../assets/home/partners/group.png'
import wecar from '../../assets/home/partners/wecar.png'

function Companies() {
  return (
    <div className='container companies'>
        <div className='comp-txt-side'>
            <h2>We are supported</h2>
            <p>Get freedom with private, global digital money. Become your own bank with full control over your digital assets.</p>
        </div>
        <div className='comp-img-side'>
            <img src={google} />
            <img src={yahoo} />
            <img src={yandex} />
            <img src={wecar} />
            <img src={ods} />
            <img src={nas} />
            <img src={group} />
            <img src={ambdev} />
            <img src={xwc} />
        </div>
    </div>
  )
}

export default Companies