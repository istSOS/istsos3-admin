
const initialState = {
    isFetching: false,
    data: []
};

const samplingtypes = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_SAMPLING_TYPES':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_SAMPLING_TYPES_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        default:
            return state;
    }
};

export default samplingtypes;
