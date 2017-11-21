import {
    fetch
} from '../../actions/fetch';

//import {setting} from '../setting';

export function fetchFois() {
    return fetch(
        'FETCH_FOIS'
    );
}

export const foiSelected = (identifier) => {
    return {
        type: 'FOI_SELECTED',
        identifier: identifier
    }
}
