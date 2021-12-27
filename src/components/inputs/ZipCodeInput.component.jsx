import React, { useContext } from 'react';
import isPostalCode from 'validator/lib/isPostalCode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { InsuranceFormContext } from '../../context/InsuranceFormContext.component';

import { updateFormFieldAction } from '../../actions/insurance-form.actions';
import INSURANCE_FORM_TYPES from '../../action-types/insurance-form.types';

const ZipCodeInput = () => {
    const { dispatchInsuranceFormState } = useContext(InsuranceFormContext);

    const updateZipCode = (event) => {
        const zipCodeValue = event.target.value;

        if (zipCodeValue.length < 5 || !isPostalCode(zipCodeValue, 'any'))
            return dispatchInsuranceFormState(
                updateFormFieldAction(INSURANCE_FORM_TYPES.UPDATE_ZIP_CODE, zipCodeValue, false)
            );

        dispatchInsuranceFormState(updateFormFieldAction(INSURANCE_FORM_TYPES.UPDATE_ZIP_CODE, zipCodeValue, true));
    };

    return (
        <div className="zip-code__input-container">
            <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>

            <input type="text" placeholder="Zip Code" onInput={updateZipCode} />
        </div>
    );
};

export default ZipCodeInput;
