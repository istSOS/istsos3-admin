import {
    fetch
} from '../../actions/fetch';


export function fetch_observation_types() {
    return fetch(
        'FETCH_OBSERVATION_TYPES'
    );
}

export const observationTypeSelected = (selected) => {
    return {
        type: 'OBSERVATION_TYPE_SELECTED',
        selected: selected
    }
}
