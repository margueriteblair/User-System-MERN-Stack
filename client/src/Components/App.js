import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './AppRouter'
import Button from './Button'
import Styles from '../utils/styles'


export default function App() {
  const [theme, setTheme ] = useState(true)
  useEffect( () => {

  }, [])
   return (
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
  )
}
