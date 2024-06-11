// import React, { useState } from 'react'
// import Navbar from '../Navbar/Navbar'


// const BACKEND_URL = process.env.BACKEND_URL

// const SignUp = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const signUp = async () => {
//         if (!email || !password) {
//             return
//         }
//         const response = await fetch(`${BACKEND_URL}/api/v1/auth`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//     }

//     return (
//         <div>
//             <Navbar page='signup' />
//             <div>
//                 <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <button onClick={signUp}>Sign Up</button>
//             </div>
//         </div>
//     )
// }

// export default SignUp

import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './signup.css'; // Import your CSS file

const BACKEND_URL = process.env.BACKEND_URL;

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
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

// import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar';
// import './signup.css'; // Import your CSS file

// const BACKEND_URL = process.env.BACKEND_URL;

// const SignUp = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');

//     const signUp = async () => {
//         if (!email || !password || !name) {
//             return;
//         }
//         const response = await fetch(`${BACKEND_URL}/api/v1/auth/signup`, { // Ensure the endpoint matches your backend
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email,
//                 password,
//                 name
//             })
//         });
//         const data = await response.json();
//         console.log(data);
//     };

//     return (
//         <div>
//             <Navbar page='signup' />
//             <div className="signup-container">
//                 <div className="signup-form">
//                     <h2>Sign Up</h2>
//                     <div className="input-group">
//                         <label>Name</label>
//                         <input
//                             type='text'
//                             placeholder='Name'
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="form-input"
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Email</label>
//                         <input
//                             type='email'
//                             placeholder='Email'
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="form-input"
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label>Password</label>
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="form-input"
//                         />
//                     </div>
//                     <button className="signup-btn" onClick={signUp}>
//                         Sign Up
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;
