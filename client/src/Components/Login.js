import React from 'react'
import Button from './Button'

export default function Login() {
    const regLink = '/register';
    return (
        <div>
            <h1>
                Login
            </h1>
            <br/>
            <br/>
            <Button onClick={() => {window.location = regLink}} text="Register"/>

        </div>
    )
}
