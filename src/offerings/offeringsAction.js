import {
    fetch
} from '../actions/fetch';


export function fetch_offerings(filters = undefined) {
    return fetch(
        'FETCH_OFFERINGS'
    );
}
