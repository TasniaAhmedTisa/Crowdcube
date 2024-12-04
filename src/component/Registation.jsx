//import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate   } from 'react-router-dom';
//import { auth } from '../firebase/firebase.config';
//import { toast, ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";




const Registation = () => {
  const [user,setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  //const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then((res) =>{
     // console.log(res.user)
      setUser(res.user)
      navigate('/');
    })
    .catch(error =>{
      //console.log('Error', error)
    })
  }

  const handleRegister = e =>{
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(name, email, password)

    
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      setErrorMessage('Password must include at least one uppercase letter.');
      return;
    }

    if (!hasLowercase) {
      setErrorMessage('Password must include at least one lowercase letter.');
      return;
    }

    if (!isLongEnough) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }
    // Clear error message if validation passes
      setErrorMessage('');


      createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success('Registration successful!', {
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
  };

    return (
        <div className='w-3/6 mx-auto my-10'>

        <div className="hero text-black min-h-10">
<div className="hero-content flex-col">
<div className="text-center lg:text-left ">
  <h1 className="text-5xl font-bold">Register now!</h1>
</div>
<div className="card bg-base-100 w-full max-w-md shadow-2xl">
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
    <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="username" placeholder="Enter your name" className="input input-bordered" required />
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <input type="text" placeholder="Photo url" className="input input-bordered" required />
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control relative">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input
       type={showPass ? 'text' : 'password'}
        name="password"
        placeholder="password" className="input input-bordered" required />
      <button
      onClick={() => setShowPass(!showPass)}
       className='btn btn-xs absolute right-4 top-12 bg-inherit'>
        {
          showPass ? <FaEyeSlash />: <FaEye />
        }
      </button>
    </div>
    {errorMessage && (
                <div className="text-red-500 mt-2 text-center">
                  {errorMessage}
                </div>
              )}
    <div className="form-control mt-6">
      <button className="btn btn-primary bg-slate-700">Register</button>
      <div className="divider">OR</div>

          <button onClick={handleGoogleSignIn} className="btn bg-slate-700 btn-primary">SignIn with Google</button>
      
    </div>
  </form>
  <p className='mb-4 text-center'>Already have an account? please <Link className='text-blue-600' to={"/login"}>login</Link></p>

</div>
</div>
</div>

    </div>
    );
};

export default Registation;