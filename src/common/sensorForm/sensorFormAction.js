import {
    fetch
} from '../../actions/fetch';

export function checkSensorName(text) {
    return fetch(
        "CHECK_SENSOR_NAME",
        {
            name: text
        }
    );
}

export const updateMetadata = (key, value) => {
    return {
        type: 'SENSOR_FORM_UPDATE_META',
        key: key,
        value: value
    }
}

export const setSensorName = (text) => {
    return {
        type: 'SENSOR_FORM_SET_SENSOR_NAME',
        name: text
    }
}

// Observable property form

export const observablePropertySelected = (selected) => {
    return {
        type: 'SENSOR_FORM_OP_SELECTED',
        selected: selected
    }
}

export const uomSelected = (selected) => {
    return {
        type: 'SENSOR_FORM_UOM_SELECTED',
        selected: selected
    }
}

export const observationTypeSelected = (selected) => {
    return {
        type: 'SENSOR_FORM_OTY_SELECTED',
        selected: selected
    }
}

export const addObservableProperty = () => {
    return {
        type: 'SENSOR_FORM_ADD_OBSERVABLE_PROPERTY'
    }
}

export const removeObservableProperty = (index) => {
    return {
        type: 'SENSOR_FORM_REMOVE_OBSERVABLE_PROPERTY',
        index: index
    }
}

export const observedPropertySelected = (observedProperty) => {
    return {
        type: 'SENSOR_FORM_OBSERVED_PROPERTY_SELECTED',
        observedProperty: observedProperty
    }
}

export const setKeyword = (keyword) => {
    return {
        type: 'SENSOR_FORM_SET_KEYWORD',
        keyword: keyword
    }
}

export const removeKeyword = (index) => {
    return {
        type: 'SENSOR_FORM_REMOVE_KEYWORD',
        index: index
    }
}
