
const initialState = {
    isFetching: false,
    data: []
};

const domains = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_DOMAINS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_DOMAINS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        default:
            return state;
    }
};

export default domains;
