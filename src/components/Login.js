import React, { useRef, useState } from 'react'
import Header from './Header'
import { NETFLIX_BACKGROUND_IMAGE, NETFLIX_PHOTO_ICON } from '../utils/constant'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
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
        
      const message =   checkValidData( name?.current?.value, email.current.value, password.current.value);
      //console.log(message);
      setErrorMessage(message);

        //console.log(email.current.value);
        //console.log(password.current.value);

        //if my message is present i.e, we get string then retun the code and dont go beyong this point
        if(message) return;

        //Sign In Sign Up logic
        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
           const user = userCredential.user;

           updateProfile(user, {
            displayName: name.current.value, photoURL: NETFLIX_PHOTO_ICON
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
            navigate("/browse");
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMessage(error.message)
          });

           navigate("/browse");
           console.log(user);
             })
            .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode + "-" + errorMessage);
            });

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse")
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
            
        }
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