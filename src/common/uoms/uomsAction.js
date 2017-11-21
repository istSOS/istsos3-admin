import {
    fetch
} from '../../actions/fetch';


export function fetch_uoms() {
    return fetch(
        'FETCH_UOMS'
    );
}

export const uomSelected = (selected) => {
    return {
        type: 'UOM_SELECTED',
        selected: selected
    }
}

export const openDialog = (open) => {
    return {
        type: 'UOM_DIALOG_VISIBILITY',
        open: open
    }
}
