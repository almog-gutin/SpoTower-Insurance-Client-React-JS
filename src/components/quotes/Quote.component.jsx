import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import QuoteDropdown from '../dropdowns/QuoteDropdown.component';

const Quote = ({ title, imageURL, advantages }) => {
    const [dropdownClass, setDropdownClass] = useState('quote-dropdown');

    const showOrHideQuote = () => {
        dropdownClass === 'quote-dropdown'
            ? setDropdownClass('quote-dropdown open')
            : setDropdownClass('quote-dropdown');
    };

    const saveQoute = () => alert('Button is not functional.');

    return (
        <div className="quote-container">
            <div className="save-button-container" onClick={saveQoute}>
                <div className="save-button"></div>

                <FontAwesomeIcon icon={faStar} />
            </div>

            <div className="img-container">
                <img src={imageURL} alt={title} />
            </div>

            <h3>{title}</h3>

            <QuoteDropdown className={dropdownClass} advantages={advantages} />

            <button type="button" onClick={showOrHideQuote}>
                View My Quote
            </button>
        </div>
    );
};

export default Quote;
