

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './signup.css'; // Import your CSS file
require('dotenv').config()
// const BACKEND_URL = process.env.BACKEND_URL;

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
        if (!email || !password) {
            return;
        }
        const  BACKEND_URL = process.env.BACKEND_URL
        const response = await fetch(`${BACKEND_URL}/api/v1/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <Navbar page='signup' />
            <div className="signup-container">
                <div className="signup-form">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-input"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />
                    </div>
                    <button className="signup-btn" onClick={signUp}>
                        Sign Up
                    </button><br></br>
                    <p>Already have an account ?<br></br> <Link to="/login">Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

