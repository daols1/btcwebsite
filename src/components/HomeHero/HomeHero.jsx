import React from 'react'
import './HomeHero.scss'
import btcImg from '../../assets/home/btcimg.png'
import { motion } from 'framer-motion'

function HomeHero() {
  return (
    <div className='container homehero'>
        <div>
            <h1>Become Your Own Bank Today With Bitsons</h1>
            <p>Get freedom with private, global digital money. Become your own bank with full control over your digital assets. You get to know and keep what you have by yourself. Monitoring your assets on your phone is so nice</p>
        </div>
        <motion.img 
        src={btcImg} 
        alt="" 
        drag
        initial={{
            y:0,
        }}
        animate={{
            y: ['-4em', '4em', '-4em'],
            rotateX:[10, 0, 10],
            rotateY:[10, 0, 10],
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
        }}
        />
    </div>
  )
}

export default HomeHero
