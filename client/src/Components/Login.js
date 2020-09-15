import React from 'react'
import Button from './Button'
import Input from './Input'
import userInputs from '../utils/userInputs'
import Form from './Form'
import {} from '../utils/userRequests'

export default function Login() {
    const regLink = '/register';
    return (
        <div>
            <h1>
                Login to Your Account
            </h1>
            <br/>
            <Form inputs={userInputs} title="Login" id="loginForm" submitFunc={() => {}/>
            <Input placeholder="Enter Name" name="name" type="text" />
            <br/>
            <Button onClick={() => {window.location = regLink}} text="Register"/>

        </div>
    )
}
