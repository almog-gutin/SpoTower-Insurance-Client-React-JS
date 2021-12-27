import INSURANCE_FORM_TYPES from '../action-types/insurance-form.types';

export const updateFormFieldAction = (type, value, isValid = false) => ({
    type,
    payload: {
        value,
        isValid,
    },
});

export const updateStatusFieldActopm = (value, isChecked) => ({
    type: INSURANCE_FORM_TYPES.UPDATE_STATUS,
    payload: {
        value,
        isChecked,
    },
});
