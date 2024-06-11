import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {


  const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element : <Login />
        }, 
        {
            path:"/browse",
            element: <Browse />
        },
       
    ]);

//code to store the logged IN and sign out user details to store
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({uid: uid, email:email, displayName:displayName, photoURL: photoURL}));
          //navigate user to browse page after sign In/Up. written in login page
        } else {
          dispatch(removeUser());
        }
      });
    }, []);


  return (
    <div>
       < RouterProvider router={appRouter}>

       </RouterProvider>
    </div>
  )
}

export default Body