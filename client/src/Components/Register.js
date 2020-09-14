import React from 'react'
import Button from './Button';

export default function Register() {
    const loginLink = '/login';
    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <br/>
            <Button onClick={() =>{window.location = loginLink}} text="Login Button"/>
            <br/>
        </div>
    )
}
