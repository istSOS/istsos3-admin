
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
const observableproperties = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_OBSERVABLE_PROPERTIES':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_OBSERVABLE_PROPERTIES_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        case 'OBSERVABLE_PROPERTY_DIALOG_VISIBILITY':
            return {
                ...state,
                dialog: action.open
            };

        case 'OBSERVABLE_PROPERTY_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        case 'CREATE_OBSERVABLE_PROPERTY_OK':
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

export default observableproperties;
