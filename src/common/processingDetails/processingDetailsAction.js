import {
    fetch
} from '../../actions/fetch';

export function fetchProcessingDetails() {
    return fetch(
        'FETCH_PROCESSING_DETAILS'
    );
}

export const openDialog = (open) => {
    return {
        type: 'PROCESSING_DETAILS_DIALOG_VISIBILITY',
        open: open
    }
}
