import React from 'react'
import Button from './Button'

import Input from './Input'
import userInputs from '../utils/userInputs'

export default function Login() {
    const regLink = '/register';
    return (
        <div>
            <h1>
                Login
            </h1>
            <br/>
            <Input placeholder="Enter Name" name="name" type="text" />
            <br/>
            <Button onClick={() => {window.location = regLink}} text="Register"/>

        </div>
    )
}
