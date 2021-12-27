import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <main className="page-not-found">
            <h1>404 Page</h1>

            <Link to="/" className="btn__home">
                Home
            </Link>
        </main>
    );
};

export default PageNotFound;
