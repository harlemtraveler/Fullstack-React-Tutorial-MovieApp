import React, { Component } from 'react';
import Home from './views/Home/Home';
import About from './components/About/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const Routes = props => (
    <Router>
        <div className="app">
            <Route
                path="/"
                exact
                component={Home}
            />
            <Route
                path="/about"
                render={(renderProps) => (
                    <About {...props} {...renderProps} />
                )}
            />
        </div>
    </Router>
)

export default Routes;
