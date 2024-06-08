
import React, { useState, useContext } from 'react';
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
        const response = await fetch(`http://localhost:1010/api/v1/auth/${email}&${password}`);
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
            <div className="signup-container"> {/* Replaced with "signup-container" */}
                <div className="signup-form"> {/* Replaced with "signup-form" */}
                    <label className="label">Email</label> {/* Added "label" class */}
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
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;

// import React, { useState, useContext } from 'react';
// import Navbar from '../Navbar/Navbar';
// import PointsContext from '../../context/pointsContext';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import './Login.css'; // Make sure to import the CSS file

// const Login = () => {
//     const ctx = useContext(PointsContext);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         if (!email || !password) {
//             return;
//         }
//         const response = await fetch(`http://localhost:1010/api/v1/auth/${email}&${password}`);
//         const data = await response.json();
//         if (response.status === 200) {
//             ctx.setIsLoggedIn(true);
//             localStorage.setItem('authToken', data.token);
//             // Set a cookie with the authentication token
//             Cookies.set('authToken', data.token, { expires: 7 }); // Cookie expires in 7 days
//             navigate('/image-generator');
//         }
//     };

//     return (
//         <>
//             <Navbar page="login"/>
//             <div className="signup-container"> {/* Replaced with "signup-container" */}
//                 <div className="signup-form"> {/* Replaced with "signup-form" */}
//                     <label className="label">Email</label> {/* Added "label" class */}
//                     <input
//                         className="form-input" // Added "form-input" class
//                         type="email"
//                         placeholder="Email"
//                         onChange={(e) => setEmail(e.target.value)}
//                     /><br></br>
//                     <label className="label">Password</label> {/* Added "label" class */}
//                     <input
//                         className="form-input" // Added "form-input" class
//                         type="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
//                     /><br></br>
//                     <button className="signup-btn" onClick={handleLogin}> {/* Replaced with "signup-btn" */}
//                         Login
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;

