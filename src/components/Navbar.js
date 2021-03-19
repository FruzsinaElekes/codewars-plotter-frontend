import React, { useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from './userAuth/UserContext'
import styled from 'styled-components'

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
        <React.Fragment>
            {isVisible && <NavContainer>
                <StyledLink onClick={deleteUser} to="/">Log out</StyledLink>
                <StyledLink to="/stats-page">Statistics</StyledLink>
                <StyledLink to="/kata-finder">Kata finder</StyledLink>
                </NavContainer>
            }
        </React.Fragment>
    )
}


const NavContainer = styled.div`
    background-color: black;
    height: 50px;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bold;
    line-height:50px;
    margin: 0 2em;
    & :visited {
        color: white;
        text-decoration: none;
    }
`