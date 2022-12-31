import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404.scss';

export const Notfound = () => {
    return(
        <div className="ntfnd">
            <h1 className="heading">404</h1>
            <h3 className="subhead">Oops! Nothing was Found</h3>
            <p className="lenghty"> This page you are looking for might have been removed, 
                had it's name changed or is temporarily unavailable.
                <br />
                <Link to="/" > Return to Homepage.</Link>   
            </p>
        </div>
    )
}
