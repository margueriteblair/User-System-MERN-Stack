import React from 'react'
import Button from './Button';
import userInputs from '../utils/userInputs';
import Form from './Form'
import { regReq } from '../utils/userRequests'

export default function Register() {
    const loginLink = '/login';
    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <br/>
            <Form title="Register" inputs={[...userInputs, {name: 'password2', placeholder: "Enter Password Again", type: "password"}]}
                submitFunc={regReq}
            />
            <Button onClick={() =>{window.location = loginLink}} text="Login Button"/>
            <br/>
        </div>
    )
}
