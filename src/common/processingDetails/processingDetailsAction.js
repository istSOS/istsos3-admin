import {
    fetch
} from '../../actions/fetch';

export function fetchProcessingDetails() {
    return fetch(
        'FETCH_PROCESSING_DETAILS'
    );
}
