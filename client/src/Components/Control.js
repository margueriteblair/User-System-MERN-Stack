import React from 'react'
import useTheme from '../hooks/useTheme'

//any array can be taken, it's just an initial value

export default function Control() {

    const [theme, setTheme] = useTheme(true);

    // setTheme(() => {})

    return (
        <div>
            <h1>{theme ? 'Light Mode' : "Dark Mode"}</h1>
            <button
            onClick={() => {setTheme(prevTheme => {return !prevTheme})}}
            >Toggle Theme</button>
        </div>
    )
}
