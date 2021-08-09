import React from 'react';
import {Switch} from 'react-router-dom';
import Route from './RouteWrapper'
import Login from './Components/Login/Login';
import ValidationStudents from './Components/ValidationStudents'
import DisplayStudent from './Components/DisplayStudent';
import Logout  from './logout';
export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path='/login' exact="true" component={Login} />
                <Route path='/View' name="View" component={DisplayStudent} isPrivate/>
                <Route path='/logout' name="logout" component={Logout} isPrivate />
                <Route path='/' name="Home" component={ValidationStudents} isPrivate/>
            </Switch>
        </div>
    )
}