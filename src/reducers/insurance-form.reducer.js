import _ from 'lodash';

import '../action-types/insurance-form.types';
import INSURANCE_FORM_TYPES from '../action-types/insurance-form.types';

import * as formUtils from '../utils/form.utils';

export const INSURANCE_FORM_INITIAL_STATE = {
    values: {
        zipCode: null,
        age: null,
        status: {
            isMarried: false,
            isCurrentlyInsured: false,
            isOwnMultipleVehicles: false,
            isOwnHome: false,
        },
    },
    valueValidities: {
        zipCode: true,
        age: true,
    },
    isFormValid: false,
};

const insuranceFormReducer = (state, action) => {
    switch (action.type) {
        case INSURANCE_FORM_TYPES.UPDATE_ZIP_CODE: {
            const { value, isValid } = action.payload;

            const updatedValues = { ..._.cloneDeep(state.values), zipCode: value };
            const updatedValueValidities = { ..._.cloneDeep(state.valueValidities), zipCode: isValid };
            const updatedFormValidity =
                formUtils.isValuesValid(updatedValues) && formUtils.isValueValiditiesValid(updatedValueValidities);

            return { values: updatedValues, valueValidities: updatedValueValidities, isFormValid: updatedFormValidity };
        }
        case INSURANCE_FORM_TYPES.UPDATE_AGE: {
            const { value, isValid } = action.payload;

            const updatedValues = { ..._.cloneDeep(state.values), age: value };
            const updatedValueValidities = { ..._.cloneDeep(state.valueValidities), age: isValid };
            const updatedFormValidity =
                formUtils.isValuesValid(updatedValues) && formUtils.isValueValiditiesValid(updatedValueValidities);

            return { values: updatedValues, valueValidities: updatedValueValidities, isFormValid: updatedFormValidity };
        }
        case INSURANCE_FORM_TYPES.UPDATE_STATUS: {
            const { value, isChecked } = action.payload;

            const updatedValues = _.cloneDeep(state.values);
            switch (value) {
                case 'MARRIED':
                    updatedValues.status.isMarried = isChecked;
                    break;
                case 'INSURED':
                    updatedValues.status.isCurrentlyInsured = isChecked;
                    break;
                case 'MULTIPLE VEHICLES':
                    updatedValues.status.isOwnMultipleVehicles = isChecked;
                    break;
                default:
                    updatedValues.status.isOwnHome = isChecked;
            }

            return { ..._.cloneDeep(state), values: updatedValues };
        }
        default:
            return _.cloneDeep(state);
    }
};

export default insuranceFormReducer;
