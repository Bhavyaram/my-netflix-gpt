import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_BACKGROUND_IMAGE } from '../utils/constant'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toogleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
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
        <form className=' absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
            <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            
            )}
            
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <input type='password'placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg' />
            <button className='p-4 my-6 bg-red-700 rounded-lg w-full'>
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