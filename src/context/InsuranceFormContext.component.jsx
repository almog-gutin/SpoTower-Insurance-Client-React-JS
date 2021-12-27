import React, { createContext, useReducer } from 'react';

import insuranceFormReducer, { INSURANCE_FORM_INITIAL_STATE } from '../reducers/insurance-form.reducer';

export const InsuranceFormContext = createContext();

const InsuranceFormContextProvider = ({ children }) => {
    const [insuranceFormState, dispatchInsuranceFormState] = useReducer(
        insuranceFormReducer,
        INSURANCE_FORM_INITIAL_STATE
    );

    return (
        <InsuranceFormContext.Provider value={{ insuranceFormState, dispatchInsuranceFormState }}>
            {children}
        </InsuranceFormContext.Provider>
    );
};

export default InsuranceFormContextProvider;
