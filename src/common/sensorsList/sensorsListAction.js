import {
    fetch
} from '../../actions/fetch';


export function fetchSensors(filters = undefined) {
    return fetch(
        'FETCH_SENSORS', filters
    );
}


export const sensorSelected = (selected) => {
    return {
        type: 'SENSOR_LIST_SELECTED',
        selected: selected
    }
}
