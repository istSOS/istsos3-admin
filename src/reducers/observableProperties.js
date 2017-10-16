
const initialState = {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
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

        default:
            return state;
    }
};

export default observableproperties;
