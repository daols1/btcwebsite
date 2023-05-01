import React from 'react'
import './SignUpComponent.scss'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { app, provider } from '../../utils/firebase'
import {
    createUserWithEmailAndPassword, 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import btcImg from '../../assets/home/btcimg.png'
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import 

function SignUpComponent() {

    // Firebase auth

    const auth = getAuth( app );

    // Form state shii
    const { register, handleSubmit, formState, reset } = useForm()
    const formError = formState.errors
    const isNotTyped = formState.isDirty


    const submitHandler = (data) => {
        // console.log(data)
        // Firebase Submission

        // Define fields
        const email = data.email
        const passowrd = data.password
        // const userName = data.userName
        

        // Create userwith email and password
        createUserWithEmailAndPassword(auth, email, passowrd)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log("You have succefully signed in")
                toaster('You have successfully signed in 😀')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorMessage)
                toaster(`${errorMessage.substr(9, )} 😏`)
                // ..
            });
        reset()
    }

    // Toast

    const toaster = (msg) => {
        toast(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
    }

    // Sign in with Google

    const handleGoogleLog = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          toaster('You have successfully signed in 😀')
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          toaster(`${errorMessage.substr(9, )} 😏`)
          // ...
        });
    }

    



  return (
    <>
    <ToastContainer />
    <div className='container sign-up grid-2'>
        <div className='form-side'>
            <h1>Sign Up</h1>
            <form 
            action=""
            onSubmit={handleSubmit(submitHandler)}
            >   
                <label htmlFor="userName">Username:</label>
                {formError.userName && formError.userName.type === "required" && <span className='errors'>This is required</span>}
                {formError.userName && formError.userName.type === "maxLength" && <span className='errors'>Max length exceeded</span> }
                {formError.userName && formError.userName.type === "minLength" && <span className='errors'>Min length not reached</span> }
                <input 
                type="text"
                name="userName"
                id="userName"
                placeholder='superman'
                {...register('userName', 
                    {
                        required: true,
                        minLength: 3,
                        maxLength: 20
                })}
                />
                <label htmlFor="email">Email:</label>
                {formError.email && formError.email.type === "required" && <span className='errors'>This is required</span>}
                {formError.email && formError.email.type === "pattern" && <span className='errors'>Invalid email bros.</span>}
                <input 
                type="email"
                name="email"
                id="email"
                placeholder='example@somthing.yyy'
                {...register('email', 
                    {
                        required: true,
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                />
                <label htmlFor="password">Password:</label>
                {formError.password && formError.password.type === "required" && <span className='errors'>This is required</span>}
                {formError.password && formError.password.type === "maxLength" && <span className='errors'>Max length exceeded</span> }
                {formError.password && formError.password.type === "minLength" && <span className='errors'>Please input a passowrd not less than 8 characters</span> }
                <input 
                type="password"
                name="password"
                id="password"
                placeholder='magoa03'
                {...register('password', 
                    {
                        required: true,
                        minLength: 8,
                        maxLength: 20
                })}
                />
                <div className='signupwithg'>  
                    <p>or</p>
                    <hr />
                    <p>Sign up with <FcGoogle size={40} onClick={handleGoogleLog} /> </p>
                </div>
                <button 
                className='btn bg-blue ' 
                disabled={!isNotTyped ? true : false}
                style= {!isNotTyped ? {backgroundColor:'rgba(98, 127, 227, 0.7)'} : {backgroundColor: '#1c18fe'}}
                >Submit.</button>
            </form>
        </div>
        <div className='img-side'>
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
    </div>
    </>
  )
}

export default SignUpComponent
