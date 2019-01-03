import React from 'react';
// import { Router, Route, browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import usersData from './usersData';

// Components
import Admin from './components/admin';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Schedules from './components/schedules';

const PrivateRoute = (props) => {
    const { name, pass } = localStorage;
    let redirect = false;
    usersData.forEach(row => {
        if (row.name === name) {
            if (row.pass === pass) {
                redirect = true;
            }
        }
    });
    if (!redirect) {
        return <Redirect to="/login" />; 
    }
    const { path, component, ...rest } = props;
    const Component = component;

    if (path === '/admin') {
        return (
            <AdminRoute path={path} component={component} {...rest} />
        )
    }

    return (
        <Component {...rest} />
    );
};

const Private = withRouter(PrivateRoute);

const AdminRoute = (props) => {
    const user = localStorage;
    if (user.role !== 'Admin') {
        return <Redirect to="/dashboard" />
        
    }
    const { component, ...rest } = props;
    const Component = component;
    return (
        <Component {...rest} />
    );
}

export default () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Private exact path="/admin" component={Admin} />
            <Private exact path="/dashboard" component={Dashboard} />
            <Private exact path="/schedules" component={Schedules} />
            <Redirect exact path="*" to="/login" />
        </Switch>
    </Router>
);
