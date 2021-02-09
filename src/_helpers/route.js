import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest}) => {
    
    const token = localStorage.getItem('jwtToken');

    return (
        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export const PublicRoute = ({component: Component, restricted, ...rest}) => {

    const token = localStorage.getItem('jwtToken');

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            token && restricted ?
                <Redirect to="/dashboard" />
            :<Component {...props} />
        )} />
    );
};

export default PublicRoute;