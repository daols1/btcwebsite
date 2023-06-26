import React, {useState} from 'react'
import './ProfileComonent.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth } from "firebase/auth";
import { app } from '../../utils/firebase'


function ProfileComonent() {

  const name = useSelector((state) => state.auth.value.displayName)


  return (
    <div className='container profile'>
      Username: {name}
    </div>
  )
}

export default ProfileComonent