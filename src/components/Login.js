import React, { useRef, useState } from 'react'
import Header from './Header'
import { NETFLIX_BACKGROUND_IMAGE } from '../utils/constant'
import { checkValidData } from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    //useRef for form validation which gives the results as a object. it will create a reference(i.e, object)
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toogleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    
    const handleButtonClick = () => {
        //validate the form data
        // we are using a validate.js 
      const message =   checkValidData( name.current.value, email.current.value, password.current.value);
      console.log(message);
      setErrorMessage(message);

        //console.log(email.current.value);
        //console.log(password.current.value);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
        <img
        src = {NETFLIX_BACKGROUND_IMAGE}
        alt='Netflix-background'
        />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className=' absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
            <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            
            )}
            
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input ref={password} type='password'placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            
            <p className='text-red-500 font-bold text-lg p-2'>{errorMessage}</p>
            
            <button className='p-4 my-6 bg-red-700 rounded-lg w-full'
            onClick={handleButtonClick}
            >
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='py-4 cursor-pointer'onClick={toogleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up Now." : "Already registered! Sign In Now."}
                </p>
        </form>
    </div>
  )
}

export default Login