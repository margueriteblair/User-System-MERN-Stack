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