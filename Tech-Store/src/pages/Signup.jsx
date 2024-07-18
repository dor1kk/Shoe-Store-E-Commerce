import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/byte.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    image: '',
    role: 'customer',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    image: '',
    role: '',
  });

  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        if (value.length < 3 || value.length > 30) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: 'Username must be between 3 and 30 characters long.',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
          }));
        }
        break;
      case 'password':
        if (value.length < 6) {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: 'Password must be at least 6 characters long.',
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
          }));
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setSuccess('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5006/api/auth/signup', formData);
      console.log(response.data);
      setSuccess('Registration successful! Redirecting to homepage...');
      clearForm();
      navigate('/?newUser=true');
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setErrors({ ...errors, common: 'Error registering. Please try again.' });
      setSuccess('');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (formData.username.length < 3 || formData.username.length > 30) {
      newErrors.username = 'Username must be between 3 and 30 characters long.';
      valid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const clearForm = () => {
    setFormData({
      username: '',
      password: '',
      email: '',
      first_name: '',
      image: '',
      role: 'customer',
    });
    setErrors({
      username: '',
      password: '',
      email: '',
      first_name: '',
      image: '',
      role: '',
    });
  };

  return (
    <div className="min-h-screen max-lg:flex-col flex bg-white">
      <div className="md:block md:w-1/2 bg-coral-red p-8 text-center">
        <img
          src="https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-scan-delivery-process-png-image_10160781.png"
          alt="Welcome illustration"
          className="mx-auto w-2/3 mb-4"
        />
        <p className="text-white">Join us to see the latest technology products out there.</p>
      </div>
      <div className="m-auto w-3/4 p-16 md:w-1/2">
        <div className="text-center flex flex-col justify-center items-center mb-8">
          <img src={logo} className='w-1/4 max-lg:w-3/4 '></img>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className={`border border-gray-300 rounded-md py-2 px-3 w-full ${
                errors.username && 'border-red-500'
              }`}
              required
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`border border-gray-300 rounded-md py-2 px-3 w-full ${
                errors.password && 'border-red-500'
              }`}
              required
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="first_name"
              placeholder="Full Name"
              value={formData.first_name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          {errors.common && <p className="text-red-500">{errors.common}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className="bg-coral-red text-white py-2 px-4 rounded-md w-full hover:bg-red-600"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Already have an account? <Link to={'/signin'} className="text-coral-red">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
