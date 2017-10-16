import {
    fetch
} from '../../actions/fetch';


export function fetch_observable_properties() {
    return fetch(
        'FETCH_OBSERVABLE_PROPERTIES'
    );
}
