import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
import PointsContext from '../../context/pointsContext'

const Navbar = (props) => {
    const activeStyle = {
        color: 'red',
        textDecoration: 'underline'
    }
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('authToken')
        ctx.setIsLoggedIn(false)
        navigate('/login')
    }

    const links = [
        // { key: 'home', url: '/', name: 'Home' },
        { key: 'image', url: '/image-generator', name: 'Image Generator' },
        { key: 'history', url: '/history', name: 'History' },
        { key: 'signup', url: '/signup', name: 'Register' },
    ]

    const ctx = useContext(PointsContext)

    return (
        <div className='header-container'>
            <a href='/'><h1>ADI</h1></a>
            <div className='left'> 
                
                {   
                    links.map(link => {
                        return (
                            <Link key={link.key} style={props.page === link.key ? activeStyle : {}} to={link.url}>{link.name}</Link>
                        )
                    })
                }
           
            </div>
            
            <div>
                {
                    ctx.isLoggedIn ?
                        <button onClick={logout}>Logout</button> :
                        <button onClick={() => navigate('/login')}>Login</button>
                }
            </div>
        </div>
    )
}

export default Navbar