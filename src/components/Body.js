import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../utils/UserSlice';



const Body = () => {
    const dispatch=useDispatch();
  const approuter =createBrowserRouter([
    {
      path:'/',
      element:<Login/>

    },
    {
      path:'/Browse',
      element:<Browse/>
    }
  ])
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,display:displayName, photoURL:photoURL}));
      } else {
        dispatch(removeuser());
         
        // ...
      }
    });
    

  },[])
  return (
    <>
     <RouterProvider router={approuter}/>
    </>
  )
}

export default Body