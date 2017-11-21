import {
    fetch
} from '../../../actions/fetch';

export function fetch_fois() {
    return fetch(
        'FETCH_FOIS'
    );
}

export const foiEdit = (editing) => {
    return {
        type: 'FOI_EDIT',
        editing: editing
    }
}

export const foiEditToggle = () => {
    return {
        type: 'FOI_EDIT_TOGGLE'
    }
}
