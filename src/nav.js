import React from 'react';
import {Link} from 'react-router-dom';
import  './nav.css';

export const NAV = () => {
    return (
        <div className="navbar">

            <div><Link to="/">Tasks</Link></div>    
            <div><Link to="/completed">Completed</Link></div>
        </div>
    );
}