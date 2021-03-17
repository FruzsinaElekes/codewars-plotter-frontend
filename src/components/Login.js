import React, { useRef, useState } from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function Login() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const [toRedirect, setToRedirect] = useState(false)

    const url = process.env.REACT_APP_ORIGIN + process.env.REACT_APP_LOGIN

    const sendLogin = () => {
        axios({
            method: 'post',
            url: url,
            data: {
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            },
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => handleSuccess(response))
        .catch(error => {
            if (error.response.status === 403) alert("Incorrect username or password!")
        })
    }

    const handleSuccess = (response) => {
        let date = new Date;
        date.setTime(date.getTime() + response.data.validityInMs)
        document.cookie = `jwt=${response.data.jwt}, expires=${date.toString()}`
        setToRedirect(true)
    }

    return (
        <React.Fragment>
            {toRedirect 
            ? <Redirect to="/stats-page" />
            : <RegFormContainer>
                <div>
                    <TextField inputRef={usernameRef} label="Codewars username"></TextField>
                    <TextField inputRef={passwordRef} type="password" label="Password"></TextField>
                </div>
                <div>
                    <Button onClick={sendLogin}>Login</Button>
                </div>
            </RegFormContainer>}
        </React.Fragment>
    )
}

const RegFormContainer = styled.div`
    width: 300px;
    margin: auto;
`