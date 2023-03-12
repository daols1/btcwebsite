import React from 'react'
import './HomeHero.scss'
import btcImg from '../../assets/home/btcimg.png'
import { motion } from 'framer-motion'

function HomeHero() {
  return (
    <div className='container homehero'>
        <div>
            <h1>Become Your Own Bank Today</h1>
            <p>Get freedom with private, global digital money. Become your own bank with full control over your digital assets.</p>
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
