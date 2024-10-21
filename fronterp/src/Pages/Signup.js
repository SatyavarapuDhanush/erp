import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const postUser = async () => {
    try {
      const response = await fetch('http://localhost:8080/users/post', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      
      const data = await response.json(); 
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to add user'); // Use message from server
      }
      
      setUser({ name: '', email: '', password: '' });
      toast.success('User added successfully', { icon: false });
    } catch (error) {
      toast.error(`Error: ${error.message}`, { icon: false });
    }
  };

  const validate = () => {
    if (!user.name || !user.email || !user.password) {
      toast.warn('Complete all the fields');
      return false;
    }
    return true;
  };

  const submit = (e) => {
    e.preventDefault(); // Prevent form from refreshing
    if (!validate()) {
      return;
    }
    postUser();
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card"> 
      <form onSubmit={submit}>
        <h1>SIGN UP</h1>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <center><button type="submit">Sign Up</button></center>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
