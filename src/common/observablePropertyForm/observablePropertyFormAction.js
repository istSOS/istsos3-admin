import {
    fetch
} from '../../actions/fetch';

export function createObservableProperty(data) {
    return fetch('CREATE_OBSERVABLE_PROPERTY', data);
}

export function checkObservablePropertyName(text) {
    return fetch(
        "CHECK_OBSERVABLE_PROPERTY_NAME",
        {
            name: text
        }
    );
}

export function checkObservablePropertyDefinition(text) {
    return fetch(
        "CHECK_OBSERVABLE_PROPERTY_DEFINITION",
        {
            definition: text
        }
    );
}

export const setObservablePropertyName = (text) => {
    return {
        type: 'OBSERVABLE_PROPERTY_FORM_SET_NAME',
        name: text
    }
}

export const setObservablePropertyDefinition = (text) => {
    return {
        type: 'OBSERVABLE_PROPERTY_FORM_SET_DEFINITION',
        definition: text
    }
}
