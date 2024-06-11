
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import PointsContext from '../../context/pointsContext';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Make sure to import the CSS file

const Login = () => {
    const ctx = useContext(PointsContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            return;
        }
        const  BACKEND_URL = process.env.BACKEND_URL
        const response = await fetch(`${BACKEND_URL}/api/v1/auth/${email}&${password}`);
        const data = await response.json();
        if (response.status === 200) {
            ctx.setIsLoggedIn(true);
            localStorage.setItem('authToken', data.token);
            navigate('/image-generator');
        }
    };

    return (
        <>
            <Navbar page="login"/>
            <div className="signup-container"> 
                
                <div className="signup-form"> 
                <h2>Login</h2>
                    <label className="label">Email</label>
                    <input
                        className="form-input" // Added "form-input" class
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    /><br></br>
                    <label className="label">Password</label> {/* Added "label" class */}
                    <input
                        className="form-input" // Added "form-input" class
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    /><br></br>
                    <button className="signup-btn" onClick={handleLogin}> {/* Replaced with "signup-btn" */}
                        Login
                    </button><br></br>
                    <p>Don't have an account yet ?  <br></br><Link to="/signup">Register Now</Link></p>
                
                </div>
            </div>
        </>
    );
};

export default Login;



