import React, { useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './userAuth/UserContext'

export default function Navbar() {

    const [user, setUser] = useContext(UserContext)
    const [isVisible, setIsVisible] = useState(Object.keys(user).length !== 0)
    const deleteUser = () => setUser({})
    
    useEffect(() => {
        setIsVisible(Object.keys(user).length !== 0)
    }, [user])

    return (
        <div>
            {isVisible && <React.Fragment>
                <Link onClick={deleteUser} to="/">Log out</Link>
                <Link to="/stats-page">Statistics</Link>
                <Link to="/kata-finder">Kata finder</Link>
            </React.Fragment>
            }
        </div>
    )
}
