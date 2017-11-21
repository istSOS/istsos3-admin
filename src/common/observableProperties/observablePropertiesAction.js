import {
    fetch
} from '../../actions/fetch';


export function fetch_observable_properties() {
    return fetch(
        'FETCH_OBSERVABLE_PROPERTIES'
    );
}

export const observablePropertySelected = (selected) => {
    return {
        type: 'OBSERVABLE_PROPERTY_SELECTED',
        selected: selected
    }
}

export const openDialog = (open) => {
    return {
        type: 'OBSERVABLE_PROPERTY_DIALOG_VISIBILITY',
        open: open
    }
}
