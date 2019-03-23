import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { pageWithLayout } from '../../containers/page';

export const Home = props => (
    <div className="home">
        <h2>Welcome Home!</h2>
        <Link to="/about">About Us</Link>
    </div>
)

export default pageWithLayout(Home);
