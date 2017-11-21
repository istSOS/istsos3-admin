
const initialState = {
    isFetching: false,
    selected: null,
    data: []
};

/*
Items:
    {
        "id": 1,
        "description": "millimeter",
        "name": "mm"
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

        case 'OBSERVATION_TYPE_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        default:
            return state;
    }
};

export default observationtypes;
