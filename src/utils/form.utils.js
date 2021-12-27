export const isValuesValid = (values) => {
    for (let key of Object.keys(values)) if (values[key] === null) return false;

    return true;
};

export const isValueValiditiesValid = (values) => {
    for (let key of Object.keys(values)) if (values[key] === false) return false;

    return true;
};
