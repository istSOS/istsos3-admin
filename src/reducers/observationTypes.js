
const initialState = {
    isFetching: false,
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

        default:
            return state;
    }
};

export default observationtypes;
