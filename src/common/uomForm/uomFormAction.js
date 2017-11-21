import {
    fetch
} from '../../actions/fetch';

export function createUom(data) {
    return fetch('CREATE_UOM', data);
}

export function checkUomName(text) {
    return fetch(
        "CHECK_UOM_NAME",
        {
            name: text
        }
    );
}

export const setUomName = (text) => {
    return {
        type: 'UOM_FORM_SET_NAME',
        name: text
    }
}

export const setUomDescription = (text) => {
    return {
        type: 'UOM_FORM_SET_DESCRIPTION',
        description: text
    }
}
