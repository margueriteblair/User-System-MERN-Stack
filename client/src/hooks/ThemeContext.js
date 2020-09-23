import React, { useState, useEffect, useContext, createContext } from 'react'


const {get, set} = require('../utils/localStorage')

const ThemeContext = createContext()

const ThemeUpdateContext = createContext()

export function ThemeProvider({childen}) {
    const [theme, setTheme] = useState( () => {
        return get('theme', true)
    })

    useEffect(() => {
        set('theme', JSON.stringify(theme))
        console.log('The theme changed: ', theme)
    }, [theme]) //the dependency list, what needs to change for the function to run
    //only runs the function when theme changes

    return (
        <>
        </>
    )
}