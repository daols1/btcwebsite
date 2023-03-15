import React from 'react'
import './WalletsHero.scss'
import { motion } from 'framer-motion'
import wallimg from '../../assets/wallets/wallimg.png'

function WalletsHero() {
  return (
    
    <div className='container homehero'>
        <div>
            <h1>Proof of Stake</h1>
            <p>By storing coins in your wallet, you can earn rewards for contributing to the security of the BTCA network.</p>
        </div>
        <motion.img 
        src={wallimg} 
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

export default WalletsHero