import React, { useRef, useState } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Registration() {

    const usernameRef = useRef();
    const apiKeyRef = useRef();
    const passwordRef = useRef();
    const passwordRepeatRef = useRef();
    const [toRedirect, setRedirect] = useState(false)

    const url = process.env.REACT_APP_ORIGIN + process.env.REACT_APP_REGISTRATION
    const sendRegistration = () => {
        axios({
            method: 'post',
            url: url,
            data: {
                username: usernameRef.current.value,
                password: apiKeyRef.current.value,
                apiKey: passwordRef.current.value
            },
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if (response.status === 200) setRedirect(true)
            // TODO handle bad requests (username exists, incorrect username & apikey combination, database problem)
        })
    }


    return (
        <React.Fragment>
            {toRedirect 
            ? <Redirect to="/login-page" />
            : <RegFormContainer>
                <div>
                    <TextField inputRef={usernameRef} label="Codewars username"></TextField>
                    <TextField inputRef={apiKeyRef} label="Api Access Token"></TextField>
                    <TextField inputRef={passwordRef} type="password" label="Password"></TextField>
                    <TextField inputRef={passwordRepeatRef} type="password" label="Repeat Password"></TextField>
                </div>
                <div>
                    <Button onClick={sendRegistration}>Submit</Button>
                </div>
            </RegFormContainer>}
        </React.Fragment>
    )
}


const RegFormContainer = styled.div`
    width: 300px;
    margin: auto;
`