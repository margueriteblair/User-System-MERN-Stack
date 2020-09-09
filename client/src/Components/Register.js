import React from 'react'

export default function Register() {
    const loginLink = window.location.origin + '/login';
    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <br/>
            <a
                href={loginLink}
            >
                Login
            </a>
            <br/>
        </div>
    )
}
