import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const QuoteDropdown = ({ className, advantages }) => {
    return (
        <div className={className}>
            <ul className="content__items">
                {advantages.map((advantage) => (
                    <li>{advantage}</li>
                ))}
            </ul>

            <div className="divider-container">
                <div className="divider"></div>
                <div className="divider__arrow">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    );
};

export default QuoteDropdown;
