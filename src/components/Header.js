import React ,{useEffect}from 'react'
import {  signOut } from "firebase/auth";
import {  useNavigate } from 'react-router';
import { auth } from '../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { removeuser } from '../utils/UserSlice';
import {  onAuthStateChanged } from "firebase/auth";

const Header = () => {
     const dispatch=useDispatch();
    const Navigate=useNavigate();
    const user=useSelector(store=>store.user)

    const handlesignout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            Navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const { uid,email,displayName,photoURL} = user;
            dispatch(
                addUser
                ({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                     photoURL:photoURL})
            );
            Navigate('/Browse')
                }
                else{
                    dispatch(removeuser());
                    Navigate('/')
                }
            });
        },[]);
            
  return (
    <>
    <div className='absolute '>
    <img  className=''src='https://images.unsplash.com/photo-1627920769541-daa658ed6b59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80' alt='bg login'/>

    </div>
    <div className=' absolute  w-[98%] bg-sky-600 ml-3 mt-2 rounded-lg  p-4 text-white '>
    <div className='flex  '>
    <img  className='rounded-full h-8 w-8 ml-2
      'src='https://img.freepik.com/free-vector/flat-design-farmers-market-logo_23-2149325904.jpg' alt='logo'/>
     
     <h1 className='mx-5 text-xl font-semibold'>Home</h1>
     <h1 className='mx-5 text-xl font-semibold'>About Us </h1>
     <h1 className='mx-5 text-xl font-semibold'>Land</h1>
     <h1 className='mx-5 text-xl font-semibold'>Notifications</h1>
     <div className='ml-[48%] flex ' >
     <img  className='  cursor-pointer  rounded-full h-10 w-10 'src='https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png ' alt='user icon'/>
     
     </div>
     <button  onClick={handlesignout}className='font-bold ml-2 bg-green-700 p-1 rounded-lg'>Sign Out </button>
     </div>

    </div>
    </>
  )
}

export default Header