import {
    fetch
} from '../../actions/fetch';

export function fetchHumans() {
    return fetch(
        'FETCH_HUMANS'
    );
}

export const openDialog = (open) => {
    return {
        type: 'HUMANS_DIALOG_VISIBILITY',
        open: open
    }
}
