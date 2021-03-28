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
            :
            <React.Fragment>
            <TopPanel> 
                <div><h1>Welcome to Codewars Plotter!</h1></div>
            </TopPanel>
            <LandingContainer>
                <p>Visualize your performance on Codewars and browse completed katas!</p>
                <p> The site uses the public endpoints of the <StyledA href={process.env.REACT_APP_CW_API} target="_blank">Codewars API</StyledA></p>
                <RegFormContainer>
                    <TextField style={{ textAlign: "center"}} inputRef={usernameRef} label="Codewars username"></TextField>
                    <Button style={{ backgroundColor: "#d9392e", width: "50%", margin: "1em auto" }} onClick={getUser}>Let's see!</Button>
                </RegFormContainer>
            </LandingContainer>
            </React.Fragment>
            }
        </React.Fragment>
    )
}

const LandingContainer = styled.div`
    position: relative;
    top: 30vh;
    width: 700px;
    margin: auto;
    padding: 2em;
    text-align: center;
    
`
const TopPanel = styled.div`
    position:fixed;
    top: 0;
    margin-top: 0;
    width: 100%;
    height: 30vh;
    background-color: rgb(33, 32, 32);
    color: #f0f0f0;
    text-align: center;
    line-height: 30vh;
`

const RegFormContainer = styled.div`
    width: 50%;
    margin: auto;
    text-align:center;
`
const StyledA = styled.a`
    width: 60%;
    font-weight: bold;
    color: #f0f0f0;
    text-decoration: none;
    overflow: hidden;
    &:visited {
        color: #f0f0f0;
        text-decoration: none;
    }
    &:hover {
        color: #eb4034;
    }
`