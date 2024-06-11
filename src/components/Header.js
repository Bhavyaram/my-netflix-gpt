import React from 'react'
import { NETFLIX_LOGO } from '../utils/constant'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    

  }

  //code to store the logged IN and sign out user details to store
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
        //navigate user to browse page after sign In/Up. written in login page
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });


    //unsubscribe when component unmounts
    return () =>  unsubscribe();

  }, []);

  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img
        className='w-44'
        src= {NETFLIX_LOGO}
        alt='Netflix-logo'

        />
        { user && 
          <div className='flex  p-2'>
        <img 
        alt='user-icon'
        src= {user?.photoURL}
        className='w-12 h-12'
        />
        <button onClick={handleSignOut} className='font-bold text-white rounded-lg'>(Sign Out)</button>
        </div>
        }
        
       


    </div>
  )
}

export default Header