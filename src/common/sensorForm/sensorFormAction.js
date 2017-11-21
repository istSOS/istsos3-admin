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

export const setSensorName = (text) => {
    return {
        type: 'SENSOR_FORM_SET_SENSOR_NAME',
        name: text
    }
}

export const setSensorDescription = (text) => {
    return {
        type: 'SENSOR_FORM_SET_SENSOR_DESCRIPTION',
        description: text
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
