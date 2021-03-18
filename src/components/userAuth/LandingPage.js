import React, { useState, useRef, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { UserContext } from './UserContext';

export default function LandingPage() {

    const userUrl = process.env.REACT_APP_ORIGIN + process.env.REACT_APP_GET_USER
    const [toRedirect, setToRedirect] = useState(false)
    const usernameRef = useRef()
    const setUser = useContext(UserContext)[1]

    const getUser = () => {
        axios({
            method: 'get',
            url: userUrl + usernameRef.current.value
        })
        .then(response => {
            setUser(response.data)
            setToRedirect(true)
        })
        .catch(error => {
            alert(`Codewars username ${usernameRef.current.value} does not exist!`)
        })
    }


    return (
        <React.Fragment>
            {toRedirect 
            ? <Redirect to="/stats-page" />
            : <RegFormContainer>
                <div>This site helps you visualize your performance on Codewars (or that of your fellow warriors). 
                    The site uses the public endpoints of the Codewars API.</div>
                <div>
                    <TextField inputRef={usernameRef} label="Codewars username"></TextField>
                </div>
                <div>
                    <Button onClick={getUser}>Let's see!</Button>
                </div>
            </RegFormContainer>}
        </React.Fragment>
    )
}

const RegFormContainer = styled.div`
    width: 300px;
    margin: auto;
`