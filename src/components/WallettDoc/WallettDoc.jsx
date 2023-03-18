import React from 'react'
import { Link } from 'react-router-dom'
import {BiLinkExternal} from 'react-icons/bi'
import comma from '../../assets/wallets/comma.png'
import './WallettDoc.scss'
import FormBelow from '../FormBelow/FormBelow'
import AccordionComponent from '../Accordion/AccordionComponent'
import { accordionData } from './accData'


function WallettDoc() {
  return (
    <div className='container wallet-doc'>
        <h1>Documentation</h1>
        <p>Looking for more information or instructions? No problem. We took care of it.</p>
        <div className='grid-3'>
            <div>
                <h2>BTCA Proof of Stake</h2>
                <p>Introduction to BTCA Proof of Stake</p>
                <Link>Go<BiLinkExternal /></Link>
            </div>
            <div>
                <h2>Staking Requirements</h2>
                <p>What do you need to stake</p>
                <Link>Go<BiLinkExternal /></Link>
            </div>
            <div>
                <h2>Staking Requirements</h2>
                <p>How to start staking</p>
                <Link>Go<BiLinkExternal /></Link>
            </div>
        </div>
        <div className='grid-2 faq'>
            <div>
                <h1>FAQ</h1>
                {
                    accordionData.map(({id, title, content}) => {
                        return(
                            <AccordionComponent title={title} content={content} className='acc'/>
                        )
                    })
                }
            </div>
            <div>
                <img src={comma} alt="" />
            </div>
        </div>
        <FormBelow />
    </div>
  )
}

export default WallettDoc