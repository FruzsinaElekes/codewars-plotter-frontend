import React, { useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './userAuth/UserContext'

export default function Navbar() {

    const [userSummary, setUserSummary, userPlots, setUserPlots, userCompleted, setUserCompleted] = useContext(UserContext)
    const [isVisible, setIsVisible] = useState(Object.keys(userSummary).length !== 0)
    const deleteUser = () => {
        setUserSummary({})
        setUserPlots([])
        setUserCompleted([])
    }
    
    useEffect(() => {
        setIsVisible(Object.keys(userSummary).length !== 0)
    }, [userSummary])

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
