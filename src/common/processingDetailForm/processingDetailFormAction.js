import {
    fetch
} from '../../actions/fetch';

export function createProcessingDetail(data) {
    return fetch('CREATE_PROCESSING_DETAIL', data);
}

export function checkProcessingDetailName(text) {
    return fetch(
        "CHECK_PROCESSING_DETAIL_NAME",
        {
            name: text
        }
    );
}

export function checkProcessingDetailIdentifier(text) {
    return fetch(
        "CHECK_PROCESSING_DETAIL_IDENTIFIER",
        {
            identifier: text
        }
    );
}

export const setProcessingDetailName = (text) => {
    return {
        type: 'PROCESSING_DETAIL_FORM_SET_NAME',
        name: text
    }
}

export const setProcessingDetailIdentifier = (text) => {
    return {
        type: 'PROCESSING_DETAIL_FORM_SET_IDENTIFIER',
        identifier: text
    }
}

export const setProcessingDetailDescription = (text) => {
    return {
        type: 'PROCESSING_DETAIL_FORM_SET_DESCRIPTION',
        description: text
    }
}
