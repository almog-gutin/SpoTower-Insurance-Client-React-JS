import React, { useContext } from 'react';

import { InsuranceFormContext } from '../../context/InsuranceFormContext.component';

import { updateStatusFieldActopm } from '../../actions/insurance-form.actions';

const StatusInput = ({ id, text, value }) => {
    const { insuranceFormState, dispatchInsuranceFormState } = useContext(InsuranceFormContext);

    const updateStatus = (event) => {
        const isChecked = event.target.checked;

        dispatchInsuranceFormState(updateStatusFieldActopm(value, isChecked));
    };

    return (
        <div className="status-input">
            <input type="checkbox" id={id} onClick={updateStatus} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default StatusInput;
