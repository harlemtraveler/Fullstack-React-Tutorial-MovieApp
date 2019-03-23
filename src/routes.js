import Home from './views/Home/Home';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './components/About/About';
import { pageWithoutLayout } from './containers/page';

export const Routes = props => (
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
)

export default pageWithoutLayout(Routes);
