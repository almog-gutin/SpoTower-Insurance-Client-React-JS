import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { InsuranceFormContext } from '../../context/InsuranceFormContext.component';

import ZipCodeInput from '../inputs/ZipCodeInput.component';
import AgeInput from '../inputs/AgeInput.component';
import StatusInput from '../inputs/StatusInput.component';

import AGE_SELECTION from '../../data/age-selection.data';
import STATUS_SELECTION from '../../data/status-selection.data';

import * as quoteRequests from '../../server/quote.requests';

const InsuranceForm = () => {
    const { insuranceFormState } = useContext(InsuranceFormContext);

    const navigate = useNavigate();

    const submitForm = async (event) => {
        event.preventDefault();

        const data = _.cloneDeep(insuranceFormState.values);

        try {
            const quotes = await quoteRequests.findQuotes(data);
            console.log(quotes);

            navigate('/quotes', { state: quotes });
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    return (
        <div className="insurance-form-container">
            <header className="insurance-header">
                <h2>Get Cheap Car Insurance Rates in M</h2>
                <h3>Find & compare your best rates in 1 minute</h3>
            </header>

            <form className="insurance-form" onSubmit={submitForm}>
                <div className="zip-code-container">
                    <ZipCodeInput />

                    {!insuranceFormState.valueValidities.zipCode && (
                        <div className="error-message">Please provide a valid zip code.</div>
                    )}
                </div>

                <div className="age-selection-container">
                    <h5>Your Age</h5>

                    <div className="age-selection">
                        {AGE_SELECTION.map(({ id, text, value }) => (
                            <AgeInput key={id} id={id} text={text} value={value} />
                        ))}
                    </div>

                    {!insuranceFormState.valueValidities.age && (
                        <div className="error-message">Please choose your age range.</div>
                    )}
                </div>

                <div className="status-container">
                    {STATUS_SELECTION.map(({ id, text, value }) => (
                        <StatusInput key={id} id={id} text={text} value={value} />
                    ))}
                </div>

                <button type="submit" disabled={!insuranceFormState.isFormValid}>
                    GET QUOTES
                </button>
            </form>
        </div>
    );
};

export default InsuranceForm;
