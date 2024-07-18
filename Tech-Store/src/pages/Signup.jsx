import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    image: '',
    role: 'user'
  });

  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5006/api/auth/register', formData);
      console.log(response.data);
      setSuccess('Registration successful! Please sign in.');
      setErr('');
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setErr('Error registering. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen max-lg:flex-col-reverse flex bg-white">
      <div className="md:block md:w-1/2 bg-coral-red p-8 text-center">
        <img src='https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-scan-delivery-process-png-image_10160781.png' alt="Welcome illustration" className="mx-auto w-2/3 mb-4" />
        <p className="text-white">Join us and start connecting with every application.</p>
        <p className="text-white">Everything you need in an easily customizable dashboard.</p>
      </div>
      <div className="m-auto w-3/4 p-16 md:w-1/2">
        <div className="text-center mb-4">
          <h2 className="mb-3 text-2xl">Register</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
              required
            />
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
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="border border-gray-300 rounded-md py-2 px-3 w-full"
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
            />
          </div>
          {err && <p className="text-red-500">{err}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <button
            type="submit"
            className="bg-coral-red text-white py-2 px-4 rounded-md w-full hover:bg-red-600"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? <Link to={'/signin'} className="text-coral-red">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
