import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { pageWithLayout } from '../../containers/page';

export const About = props => (
    <div className="about">
        <h2>About us</h2>
        <Link to="/">Go Back Home</Link>
    </div>
)

export default pageWithLayout(About);
