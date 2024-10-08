import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
  const [userData, setUserData] = useState({
    UserName: '',
    Password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!userData.UserName.trim()) {
      newErrors.UserName = 'Username is required';
    } else if (userData.UserName.length < 3) {
      newErrors.UserName = 'Username must be at least 3 characters long';
    }
    const passwordRegex = /^(?=.*[A-Z])(?=(.*\d){3,})(?=.{6,})/; 
    if (!userData.Password.trim()) {
      newErrors.Password = 'Password is required';
    } else if (!passwordRegex.test(userData.Password)) {
      newErrors.Password = 'Password must contain at least 1 uppercase letter, 3 numbers, and be at least 6 characters long';
    }
    return newErrors;
  };

  const registerUser = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log('Form submitted', userData);
    }
  };

  return (
    <div className='w-full h-full justify-center items-center flex'>
      <form className='border-2 border-white rounded-2xl w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-[40vh]' onSubmit={registerUser}>

        <div className="relative left-1/2 -translate-x-1/2 w-[60%] mt-8">
          <label className='block mt-2 text-white'>Username</label>
          <input
            className={`border-[1px] w-full ${errors.UserName ? 'border-red-500' : 'border-black'} py-1 px-2`}
            type="text"
            placeholder='Enter username ...'
            value={userData.UserName}
            onChange={(e) => setUserData({ ...userData, UserName: e.target.value })}
          />
          {errors.UserName && <p className="text-red-500 text-sm">{errors.UserName}</p>}
        </div>

        <div className="relative left-1/2 -translate-x-1/2 w-[60%]">
          <label className='block mt-2 text-white'>Password</label>
          <input
            className={`border-[1px] w-full ${errors.Password ? 'border-red-500' : 'border-black'} py-1 px-2`}
            type="password"
            placeholder='Enter password ...'
            value={userData.Password}
            onChange={(e) => setUserData({ ...userData, Password: e.target.value })}
          />
          {errors.Password && <p className="text-red-500 text-sm">{errors.Password}</p>}
        </div>

 

        <button className='block mt-4 border-2 border-red-600 w-[60%] mx-auto text-red-600 hover:bg-red-600 hover:text-white duration-1000 py-2' type='submit'>
          Log in
        </button>
        <Link to="/signup">
        <button className='block mt-4 border-2 bg-red-600 border-red-600  w-[60%] mx-auto text-white hover:border-red-600 hover:bg-black hover:text-red-600 duration-500 mb-8 py-2' type='submit'>
          Registration
        </button>
        </Link>
      </form>
    </div>
  );
}
