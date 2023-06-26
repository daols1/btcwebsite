import React, {useState} from 'react'
import './ProfileComonent.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getAuth } from "firebase/auth";
import { app } from '../../utils/firebase'


function ProfileComonent() {

  const name = useSelector((state) => state.auth.value.displayName)

  // const auth = getAuth(app);
  // const user = auth.currentUser;

  

  // if (user !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  //   const emailVerified = user.emailVerified;

  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   const uid = user.uid;
  // }


  return (
    <div className='container profile'>
      Username: {name}
    </div>
  )
}

export default ProfileComonent