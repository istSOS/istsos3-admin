import {
    fetch
} from '../../actions/fetch';

export function fetch_materials() {
    return fetch(
        'FETCH_MATERIALS'
    );
}

export const materialSelected = (selected) => {
    return {
        type: 'MATERIALS_SELECTED',
        selected: selected
    }
}
