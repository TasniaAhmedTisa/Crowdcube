import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import React, {useState} from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
//import { auth } from '../firebase/firebase.config';
//import {toast, ToastContainer } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  //const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then((res) =>{
     // console.log(res)
      navigate('/');
    })
    .catch(error =>{
      console.log('Error', error)
    })
  }

  const handleLogin = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password)

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success('Login successful!', {
          position: 'top-center',
          autoClose: 2000,
        });
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(`Error: ${error.message}`, {
          position: 'top-center',
        });
      });
  }
    return (
        <div className='w-3/6 mx-auto my-10'>
            <div className="hero text-black min-h-10">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-lg shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <NavLink to={"/forgetPassword"} className="label-text-alt link link-hover">Forgot password?</NavLink>
          </label>
        </div>
        <div className="form-control mt-6 gap-2">
          <button onSubmit={handleLogin} className="btn bg-slate-700 btn-primary">Login</button>
          <div className="divider">OR</div>

          <button onClick={handleGoogleSignIn} className="btn bg-slate-700 btn-primary">Login with Google</button>

        </div>
      </form>
      <p className='ml-4 mb-4'>New to this website? please <Link className='text-blue-600' to={"/register"}>Register</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;