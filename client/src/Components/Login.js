import React from 'react'

export default function Login() {
    const regLink = window.location.origin + '/register';
    return (
        <div>
            <h1>
                Login
            </h1>
            <br/>
            <br/>
            <a
                href={regLink}
            >
                Register
            </a>
        </div>
    )
}
