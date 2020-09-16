import React from 'react'
import Button from './Button'
import Form from './Form'
import {loginReq} from '../utils/userRequests'
import {loginInputs} from '../utils/userInputs'

export default function Login() {
    const regLink = '/register';
    return (
        <div className="login">
            <Form inputs={loginInputs} title="Login" id="loginForm" submitFunc={loginReq}/>
            <br/>
            <p>Need an Account?</p>
            <Button style={{color: "white", backgroundColor: "black"}} text="Sign Up Here" onClick={() => {window.location = regLink}}/>

        </div>
    )
}
