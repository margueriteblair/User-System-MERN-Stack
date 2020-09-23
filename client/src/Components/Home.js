import React from 'react'
import Button from './Button'
import {useTheme} from '../hooks/useTheme'

export default function Home() {
    const loginLink = '/login';
    const regLink = '/register';
    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <h2>
                {useTheme() ? 'Light Mode' : 'Dark Mode'}
            </h2>

            <br/>

            <Button 
            onClick= {() => {window.location = loginLink}}
            text='Login Button'
            />
            <br/>
            <Button onClick={() => {window.location = regLink}} text="Register Button"/>

        </div>
    )
}
