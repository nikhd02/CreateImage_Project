// import React, { useState, useContext } from 'react'
// import Navbar from '../Navbar/Navbar'
// import PointsContext from '../../context/pointsContext'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//     const ctx = useContext(PointsContext)
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const navigate = useNavigate()

//     const handleLogin = async () => {
//         if (!email || !password) {
//             return
//         }
//         const response = await fetch(`http://localhost:1010/api/v1/auth/${email}&${password}`)
//         const data = await response.json()
//         if (response.status == 200) {
//             ctx.setIsLoggedIn(true)
//             localStorage.setItem('authToken', data.token)
//             navigate('/image-generator')
//         }
//     }
//     return (
//         <div>
//             <Navbar page='login' />
//             <div>
//                 <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
//                 <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
//                 <button onClick={handleLogin} >Login</button>
//             </div>
//         </div>
//     )
// }

// export default Login



// import React, { useState, useContext } from 'eact';
// import Navbar from '../Navbar/Navbar';

// import PointsContext from '../../context/pointsContext';
// import { useNavigate } from 'eact-router-dom';





// const Login = () => {
    //   const ctx = useContext(PointsContext);
    //   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
    //     if (!email ||!password) {
//       return;
//     }
//     const response = await fetch(`http://localhost:1010/api/v1/auth/${email}&${password}`);
//     const data = await response.json();
//     if (response.status === 200) {
//       ctx.setIsLoggedIn(true);
//       localStorage.setItem('authToken', data.token);
//       navigate('/image-generator');
//     }
//   };

//   return (
//     <div className="login-container">
//       <Navbar page="login" />
//       <div className="login-form">
//         <h2>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="form-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-input"
//         />
//         <button className="login-btn" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import './login.css'
import PointsContext from '../../context/pointsContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const ctx = useContext(PointsContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }
    setLoading(true);
    const response = await fetch(`http://localhost:1010/api/v1/auth/${email}&${password}`);
    const data = await response.json();
    if (response.status === 200) {
      ctx.setIsLoggedIn(true);
      localStorage.setItem('authToken', data.token);
      navigate('/image-generator');
    }
    setLoading(false);
  };

  return (
      <><Navbar /><div className="login-container">
          <div className="login-form">
              <h2>Login</h2>
              <form>
                  <div className="input-group">
                      <label>Email</label>
                      <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-input" />
                  </div>
                  <div className="input-group">
                      <label>Password</label>
                      <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="form-input" />
                  </div>
                  <button className="login-btn" onClick={handleLogin}>
                      {loading ? 'Loading...' : 'Login'}
                  </button>
              </form>
          </div>
      </div></>
  );
};

export default Login;