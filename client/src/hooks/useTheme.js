import React, {useState, useEffect} from 'react'
import {get, set} from '../utils/localStorage'


export default useTheme(initialVal) {
    const [theme, setTheme] = useState(() => {
        return initialVal
    })
    return [theme, setTheme]
}

function get (key) {

}


function set (key, value) {

}