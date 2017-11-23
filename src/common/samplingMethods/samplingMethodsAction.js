import {
    fetch
} from '../../actions/fetch';


export function fetchSamplingMethods() {
    return fetch(
        'FETCH_SAMPLING_METHODS'
    );
}

export const samplingMethodSelected = (selected) => {
    return {
        type: 'SAMPLING_METHOD_SELECTED',
        selected: selected
    }
}

export const openDialog = (open) => {
    return {
        type: 'SAMPLING_METHODS_DIALOG_VISIBILITY',
        open: open
    }
}
