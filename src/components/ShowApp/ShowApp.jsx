import React from 'react'
import { Link } from 'react-router-dom'
import laptop from '../../assets/home/laptop.png'
import phone from '../../assets/home/phone.png'
import { DiLinux } from 'react-icons/di'
import{  AiFillAndroid, AiFillApple, AiFillWindows,} from 'react-icons/ai'
import './ShowApp.scss'

function ShowApp() {
  return (
    <div className='container showapp grid-2'>
        <div className='txt-side'>
            <h2>Wallet and Tools</h2>
            <p>By leveraging cutting-edge blockchain technology and a robust set of features, the BTCA platform offers a comprehensive suite of tools and resources that empower you to take charge of your financial future and stay in complete control of your funds at all times, whether you're a seasoned cryptocurrency trader or just getting started in the exciting world of digital assets.</p>
            <div>
                <AiFillAndroid color='grey' size={30} />
                <AiFillApple color='grey' size={30} />
                <DiLinux color='grey' size={30} />
                <AiFillWindows color='grey' size={30} />
            </div>
            <Link className='btn bg-dark'>Download wallet</Link>
        </div>
        <div className='laptop-side'>
            <img src={laptop} alt="" className='laptop'/>
            <img src={phone} alt="" className='phone' />
        </div>
    </div>
  )
}

export default ShowApp
