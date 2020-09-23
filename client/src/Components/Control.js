import React from 'react'
import {useTheme, useThemeUpdate} from '../hooks/ThemeContext'

//any array can be taken, it's just an initial value

export default function Control() {

    const theme = useTheme()

    const updateTheme = useThemeUpdate()

    console.log(theme)

    // setTheme(() => {})

    return (
        <div>
            <h1>{theme ? 'Light Mode' : "Dark Mode"}</h1>
            <button
            onClick={updateTheme}
            >Toggle Theme</button>
        </div>
    )
}
