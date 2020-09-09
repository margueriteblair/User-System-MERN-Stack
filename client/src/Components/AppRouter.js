import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'

import { Switch, Route } from 'react-router-dom'

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path = '/login'>
                <Login />
            </Route>
            <Route>
                <Register />
            </Route>
            <Route path='/'>
                <div>
                    <h1>404</h1>
                </div>
            </Route>
        </Switch>
    )
}