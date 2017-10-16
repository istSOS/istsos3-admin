
const initialState = {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    data: []
};

/*
Items:
    {
        "description": "",
        "def": "urn:ogc:def:parameter:x-istsos:1.0:water:analysis",
        "name": "",
        "type": null,
        "uom": null
    }
*/
const observationtypes = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_OBSERVATION_TYPES':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_OBSERVATION_TYPES_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        default:
            return state;
    }
};

export default observationtypes;
