import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    UserName: '',
    Password: '',
    MobileNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z]+$/;

    if (!userData.FirstName.trim()) {
      newErrors.FirstName = 'First name is required';
    } else if (!nameRegex.test(userData.FirstName)) {
      newErrors.FirstName = 'First name must contain only letters';
    }
    if (!userData.LastName.trim()) {
      newErrors.LastName = 'Last name is required';
    } else if (!nameRegex.test(userData.LastName)) {
      newErrors.LastName = 'Last name must contain only letters';
    }
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
    const mobileNumberRegex = /^\d{7,}$/;
    if (!userData.MobileNumber.trim()) {
      newErrors.MobileNumber = 'Mobile number is required';
    } else if (!mobileNumberRegex.test(userData.MobileNumber)) {
      newErrors.MobileNumber = 'Mobile number must contain at least 7 digits and no letters';
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
      <form className='border-2 border-white rounded-2xl w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] ' onSubmit={registerUser}>

        <div className="relative left-1/2 -translate-x-1/2 w-[60%] py-4">
          <label className='block mt-2 text-white'>First name</label>
          <input
            className={`border-[1px] w-full ${errors.FirstName ? 'border-red-500' : 'border-black'} py-1 px-2`}
            type="text"
            placeholder='Enter first name ...'
            value={userData.FirstName}
            onChange={(e) => setUserData({ ...userData, FirstName: e.target.value })}
          />
          {errors.FirstName && <p className="text-red-500 text-sm">{errors.FirstName}</p>}
        </div>

        <div className="relative left-1/2 -translate-x-1/2 w-[60%]">
          <label className='block mt-2 text-white'>Last name</label>
          <input
            className={`border-[1px] w-full ${errors.LastName ? 'border-red-500' : 'border-black'} py-1 px-2`}
            type="text"
            placeholder='Enter last name ...'
            value={userData.LastName}
            onChange={(e) => setUserData({ ...userData, LastName: e.target.value })}
          />
          {errors.LastName && <p className="text-red-500 text-sm">{errors.LastName}</p>}
        </div>

        <div className="relative left-1/2 -translate-x-1/2 w-[60%]">
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

        <div className="relative left-1/2 -translate-x-1/2 w-[60%]">
          <label className='block mt-2 text-white'>Mobile number</label>
          <input
            className={`border-[1px] w-full ${errors.MobileNumber ? 'border-red-500' : 'border-black'} py-1 px-2`}
            type='number'
            placeholder='Enter mobile number ...'
            value={userData.MobileNumber}
            onChange={(e) => setUserData({ ...userData, MobileNumber: e.target.value })}
          />
          {errors.MobileNumber && <p className="text-red-500 text-sm">{errors.MobileNumber}</p>}
        </div>

        <button className='block mt-4 border-2 border-red-600 w-[60%] mx-auto text-red-600 hover:bg-red-600 hover:text-white duration-1000 py-2' type='submit'>
          Register
        </button>
        <Link to="/login">
        <button className='block mt-4 border-2 bg-red-600 border-red-600  w-[60%] mx-auto text-white hover:border-red-600 hover:bg-black hover:text-red-600 duration-500 mb-8 py-2' type='submit'>
          Log in account
        </button>
        </Link>
      </form>
    </div>
  );
}
