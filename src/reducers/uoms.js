
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
const uoms = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_UOMS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_UOMS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        default:
            return state;
    }
};

export default uoms;
