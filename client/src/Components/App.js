import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import Button from './Button'
import Styles from '../utils/styles'


export default function App() {
  // const [theme, setTheme ] = useState(true)
  // useEffect( () => {
  //   console.log(theme)
  // }, [theme]) //put in state variables here
   return (
    <BrowserRouter>
    {/* <Button text="Change Theme"
    onClick={() => {
      setTheme(prevTheme => {return !prevTheme}) //you just set it to the opposite of what it used to be
    }}
    /> */}
    <AppRouter dm={theme}/>
    </BrowserRouter>
  )
}
