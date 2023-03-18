import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { accordionData } from '../WallettDoc/accData'
import './AccordionComponent.scss'

function AccordionComponent({id, title, content}) {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className='accordion'>

      <div key={id}>
        <h3>{title}<motion.span whileTap={{scale:0.8,}} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <MdOutlineKeyboardArrowUp/> : <MdOutlineKeyboardArrowDown/>}</motion.span></h3>
          {
            isOpen ?
              <p>{content}</p>
              :
              null
          }
        </div>



      {/* {
        accordionData.map(({id, title, content}) => {
          return(
            
          )
        })
      } */}
    </div>
  )
}

export default AccordionComponent