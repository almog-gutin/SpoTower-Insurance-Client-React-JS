import React, { useContext, useState, useEffect } from 'react';

import { InsuranceFormContext } from '../../context/InsuranceFormContext.component';

import { updateFormFieldAction } from '../../actions/insurance-form.actions';
import INSURANCE_FORM_TYPES from '../../action-types/insurance-form.types';

const AgeInput = ({ id, text, value }) => {
    const { insuranceFormState, dispatchInsuranceFormState } = useContext(InsuranceFormContext);

    const [ageInputClass, setAgeInputClass] = useState('age-input');

    const updateAge = () => {
        if (insuranceFormState.values.age === value)
            return dispatchInsuranceFormState(updateFormFieldAction(INSURANCE_FORM_TYPES.UPDATE_AGE, null, false));

        dispatchInsuranceFormState(updateFormFieldAction(INSURANCE_FORM_TYPES.UPDATE_AGE, value, true));
    };

    useEffect(() => {
        if (insuranceFormState.values.age !== value) return setAgeInputClass('age-input');

        setAgeInputClass('age-input selected');
    }, [insuranceFormState]);

    return (
        <button type="button" className={ageInputClass} onClick={updateAge}>
            {text}
        </button>
    );
};

export default AgeInput;
