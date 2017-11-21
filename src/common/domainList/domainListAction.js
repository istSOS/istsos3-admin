import {
    fetch
} from '../../actions/fetch';

export function fetchDomains() {
    return fetch(
        'FETCH_DOMAINS'
    );
}
