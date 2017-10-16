
const initialState = {
    isFetching: false,
    data: []
};

const fois = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_FOIS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_FOIS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        default:
            return state;
    }
};

export default fois;
