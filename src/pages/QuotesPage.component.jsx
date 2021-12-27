import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

import Quote from '../components/quotes/Quote.component';

const QuotesPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (state == null) navigate('/');
    }, []);

    return (
        <main className="quotes-page">
            {state == null || state.length === 0 ? (
                <div className="no-quotes-container">
                    <h1>No Quotes Were Found...</h1>

                    <Link to="/" className="btn__home">
                        Home
                    </Link>
                </div>
            ) : (
                <div className="quotes-container">
                    {state.map(({ _id, marketingTitle, imageURL, advantages }) => (
                        <Quote key={_id} title={marketingTitle} imageURL={imageURL} advantages={advantages} />
                    ))}
                </div>
            )}
        </main>
    );
};

export default QuotesPage;
