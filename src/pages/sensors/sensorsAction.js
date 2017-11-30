import {
    fetch
} from '../../actions/fetch';


export function fetch_sensors(filters = undefined) {
    return fetch(
        'FETCH_SENSORS',
        filters
    );
};

export const applyObsPropFilter = (observedProperties) => {
    return {
        type: 'APPLY_OBSP_PROP_FILTER',
        observedProperties: observedProperties
    }
};

export const updateDateRange = (data) => {
    return {
        type: 'UPDATE_OBSP_PROP_DATE_RANGE',
        data: data
    }
};

export const resetDateRange = () => {
    return {
        type: 'RESET_OBSP_PROP_DATE_RANGE'
    }
};
