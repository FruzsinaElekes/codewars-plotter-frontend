import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login-page">Login</Link>
            <Link to="/registration-page">Register</Link>
        </div>
    )
}