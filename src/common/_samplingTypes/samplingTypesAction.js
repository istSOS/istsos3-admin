import {
    fetch
} from '../../actions/fetch';


export function fetch_sampling_types() {
    return fetch(
        'FETCH_SAMPLING_TYPES'
    );
}
