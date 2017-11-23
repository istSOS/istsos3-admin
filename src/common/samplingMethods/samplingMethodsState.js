
const initialState = {
    isFetching: false,
    dialog: false,
    isAdding: false,
    isDeleting: false,
    selected: null,
    data: []
};

/*
Items:
    {
        "def": "urn:ogc:def:parameter:x-istsos:1.0:water:analysis",
        "description": "",
        "name": ""
    }
*/
const samplingmethods = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_SAMPLING_METHODS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_SAMPLING_METHODS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        case 'SAMPLING_METHODS_DIALOG_VISIBILITY':
            return {
                ...state,
                dialog: action.open
            };

        case 'SAMPLING_METHOD_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        case 'CREATE_SAMPLING_METHOD_OK':
            return {
                ...state,
                dialog: false,
                selected: action.json.data,
                data: [action.json.data, ...state.data]
            };

        default:
            return state;
    }
};

export default samplingmethods;
