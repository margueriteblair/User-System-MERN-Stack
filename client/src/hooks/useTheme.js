import React, {useState, useEffect} from 'react'
import {get, set} from '../utils/localStorage'


export default (initialVal) => {

    const [theme, setTheme] = useState((initialVal) => {
        return initialVal
    })

    useEffect(() => {
        console.log()
        set('theme', theme)

    }, [theme])

    return[theme, setTheme]

    }


