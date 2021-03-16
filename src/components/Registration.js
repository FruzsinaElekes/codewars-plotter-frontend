import React, { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Registration() {

    const usernameRef = useRef();
    const apiKeyRef = useRef();
    const passwordRef = useRef();
    const passwordRepeatRef = useRef();

    const url = process.env.REACT_APP_ORIGIN + process.env.REACT_APP_REGISTRATION
    console.log(url)
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
    }


    return (
        <RegFormContainer>
            <div>
                <TextField inputRef={usernameRef} label="Codewars username"></TextField>
                <TextField inputRef={apiKeyRef} label="Api Access Token"></TextField>
                <TextField inputRef={passwordRef} type="password" label="Password"></TextField>
                <TextField inputRef={passwordRepeatRef} type="password" label="Repeat Password"></TextField>
            </div>
            <div>
                <Button onClick={sendRegistration}>Submit</Button>
            </div>
        </RegFormContainer>
    )
}


const RegFormContainer = styled.div`
    width: 300px;
    margin: auto;
`