import {
    fetch
} from '../../actions/fetch';


export function fetch_sensors(filters = undefined) {
    return fetch(
        'FETCH_SENSORS'
    );
}
