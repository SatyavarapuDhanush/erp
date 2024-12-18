import React, { useState } from 'react';
import axios from 'axios'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [user, setUser] = useState({ id: "", password: "" });
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false); 
  const Navigate = useNavigate();

  const userlogin = async () => {
    setLoading(true);
    console.log("Logging in with ID:", user.id, "and Password:", user.password);
    try {
        const response = await axios.post('http://localhost:8080/users/login', {
            id: user.id,
            password: user.password
        }, {
            headers: { 'Content-Type': 'application/json' }
        });
        const data = response.data;
        if (!response) {
            throw new Error(data.message || 'Failed to login');
        }
        setIsLogin(data.success);
        toast.success('Login successful!');
        setUser({ id: "", password: "" });
        Navigate('/home');
    } catch (error) {
        console.error("Error during login:", error); 
        toast.error(`Error: ${error.message}`, { icon: false });
    } finally {
        setLoading(false);
    }
};

  const validate = () => {
    if (!user.id || !user.password) {
      toast.warn('Please complete all fields');
      return false;
    }
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    userlogin();
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-card"> 
      <form onSubmit={submit}>
        <h1>SIGN IN</h1>
        <label>UserId:</label>
        <input
          type="text"
          name="id"
          value={user.id}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <center><button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button></center>
      </form>
      <Link to="/signup">Signup</Link>
      {isLogin && <p>Login successful!</p>}
      <ToastContainer />
    </div>
  );
};

export default Login;
