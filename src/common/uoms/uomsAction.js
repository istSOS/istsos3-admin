import {
    fetch
} from '../../actions/fetch';


export function fetch_uoms() {
    return fetch(
        'FETCH_UOMS'
    );
}
