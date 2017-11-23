import {
    fetch
} from '../../actions/fetch';

export function createSamplingMethod(data) {
    return fetch('CREATE_SAMPLING_METHOD', data);
}

export function checkSamplingMethodName(text) {
    return fetch(
        "CHECK_SAMPLING_METHOD_NAME",
        {
            name: text
        }
    );
}

export function checkSamplingMethodIdentifier(text) {
    return fetch(
        "CHECK_SAMPLING_METHOD_IDENTIFIER",
        {
            identifier: text
        }
    );
}

export const setSamplingMethodIdentifier = (text) => {
    return {
        type: 'SAMPLING_METHOD_FORM_SET_IDENTIFIER',
        identifier: text
    }
}

export const setSamplingMethodName = (text) => {
    return {
        type: 'SAMPLING_METHOD_FORM_SET_NAME',
        name: text
    }
}

export const setSamplingMethodDescription = (text) => {
    return {
        type: 'SAMPLING_METHOD_FORM_SET_DESCRIPTION',
        description: text
    }
}
