import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'

import { 
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom'
import {useTheme} from '../hooks/useTheme'


export default function AppRouter(props) {
    const [theme, setTheme] = useTheme(true)

    return (
    <Router>
        <Switch>
            <h1>
                {theme ? 'Light Mode' : 'Dark Mode'}
            </h1>
            <button>
            onClick = {() => {
                setTheme( prevTheme => {return !prevTheme})
            }}
            {!theme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}   
            </button>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path = '/login'>
                <Login />
            </Route>
            <Route exact path = '/register'>
                <Register />
            </Route>
            <Route path='/'>
                <div>
                    <h1>404</h1>
                </div>
            </Route>
        </Switch>
    </Router>
    )
}