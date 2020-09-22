import React, {useState, useEffect} from 'react'
import {get, set} from '../utils/localStorage'


export default useTheme(initialVal) {

    const [theme, setTheme] = useState((initialVal) => {
        return get("theme", initialVal)
    })

    useEffect(() => {
        console.log(`Theme changed to: `, theme)
        return () => {
            cleanup
        }
    }, [theme])

    }
