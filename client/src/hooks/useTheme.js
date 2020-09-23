import React, {useState, useEffect} from 'react'
import {get, set} from '../utils/localStorage'


export default (initialVal) => {

    const [theme, setTheme] = useState(() => {
        return get('theme', initialVal)
    })

    useEffect(() => {
        console.log('themem changed')
        
        set('theme', theme)

    })

    return[theme, setTheme]

    }


