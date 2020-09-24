import React from 'react';
import Button from './Button';
// import useTheme from '../hooks/useTheme'
import {useTheme} from '../hooks/ThemeContext'

export default function Home() {

    const loginLink = '/login';
    const regLink = '/register';
//   const [theme] = useTheme()

    return (
        <div>
            <h1>
                Welcome To Our Service
            </h1>
            <h2>
                {useTheme() ? "You're in Light" : "You're in Dark"}
            </h2>
            <br/>

            <Button 
            onClick= {() => {window.location = loginLink}}
            text='Login button'
            style={{color: 'white', backgroundColor: 'black'}}
            />

            <Button 
            onClick= {() => {window.location = regLink}}
            text='Register button'
            style={{color: 'white', backgroundColor: 'black'}}
            />
        </div>
    )
}
