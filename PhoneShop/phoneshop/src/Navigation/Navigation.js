import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export var NavigationComponent = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><NavLink to="/ProductList">Home</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};