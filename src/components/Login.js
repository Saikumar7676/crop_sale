import React,{useRef, useState} from 'react'
import '../index.css'
import { checkvalidate } from '../utils/Validate';
import {auth} from '../utils/Firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import {  updateProfile } from "firebase/auth";


const Login = () => {
  
    const[issignin , Setissignin]=useState(true);
    const[errormessage,Seterrormessage]=useState('');
    const Navigate=useNavigate();

    const email= useRef(null);
    const password= useRef(null);
    const name=useRef(null);

    const handlesignin=()=>{
      const message = checkvalidate(email.current.value, password.current.value)
      Seterrormessage(message);
       if(message) return;

       if(!issignin){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: "name.current.value", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    console.log(user);
    Navigate('/Browse')
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    Seterrormessage(+errorMessage); 
  });

       }
       else
       {
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    console.log(user);

    Navigate('/Browse')
  })
  .catch((error) => {
    const errorMessage = error.message;
    Seterrormessage(errorMessage)
  });
       }
    }

    const togglesigninform = ()=>{
      Setissignin(!issignin);
    }
  return (
    <> 
    
    <div className='absolute'>
     <img src='https://wallpapercave.com/wp/wp1906844.jpg' alt='bg login'/>

     </div>
     <div className=' mt-2 pl-4 absolute h-24 w-28 rounded-full'>
      <img  className='rounded-full
      'src='https://img.freepik.com/free-vector/flat-design-farmers-market-logo_23-2149325904.jpg' alt='logo'/>
     </div>
     <div> 
      <h1 className='absolute mt-[15%] ml-[10%] font- semibold text-xl text-white'>
        OUR FARMER DESERVE PRAISE NOT CONDEMNATION ; <br></br>AND THEIR EFFICIENCY SHOULD  BE CAUSE  FOR GRATITUDE ,<br></br>
        NOT SOMETHING FOR WHICH  THEY ARE PENALIZED 
      </h1>
      <h1 className='absolute mt-[23%] ml-[35%]  font-bold text-xl text-white'> <i>- John F. Kennedy </i></h1>
    </div>
    <div className='  opacity-80 mt-28 px-12 flex justify-center ml-[70%] bg-white  shadow-xl rounded absolute  '>
    
      <form  onSubmit={(e)=>e.preventDefault()}>
       <div className=''>
       <h1 className='text-center  font-bold relative text-blue  ' >{issignin ? "Sign in " : "Sign Up "}</h1>
        <h1 className='font-semibold mt-4 '>Email</h1>
        <input  ref={email} className='border-solid border-2 border-gray-300' type='text' placeholder='' />
        </div>
        { issignin ? '' : (
          <div className='mt-4 border-solid'>
        <h1 className='font-semibold '>Name </h1>
        <input  ref={name} className='border-solid border-2 border-gray-300 ' type='text' placeholder='' />
        </div>)}
        
        <div className='mt-5'>
        <h1 className=' font-semibold'>password</h1>
        <input  ref={password} className='mt-1 border-solid border-2 border-gray-300' type='password'  />
        
       </div>
       <p className='text-red-800 font-semibold'>{errormessage}</p>
       <div className='mt-5 bg-green-800'>
        <button  onClick={handlesignin} className=' font-bold pl-14 rounded-xl p-1 hover:opacity-70  text-white '>
        {issignin ? "Login" : "Sign Up "}</button>
        </div>
        <div className='mb-10'>
       <input type="checkbox"  name="remember" />
      <label> Remember Me </label>
       </div>
       
      

       <h1  className=' cursor-pointer font-semibold mb-4' onClick={togglesigninform}>
       {issignin ? "Not a user ? Signup" : "Already a User !! Sign In "} </h1>


      </form>
      
        
    </div>
    </>
  )
        }



export default Login