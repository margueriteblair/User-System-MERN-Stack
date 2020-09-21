import React from 'react'
import Home from './Home'
import Login from './Login'
import Register from './Register'

import { 
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom'

export default function AppRouter(props) {
    return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home user={props.user} loggedIn={props.loggedIn}/>
            </Route>
            <Route exact path = '/login'>
                <Login user={props.user} loggedIn={props.loggedIn}/>
            </Route>
            <Route exact path = '/register'>
                <Register user={props.user} loggedIn={props.loggedIn}/>
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