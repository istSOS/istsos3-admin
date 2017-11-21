
const initialState = {
    isFetching: false,
    selected: null,
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

        case 'FOI_SELECTED':
            return {
                ...state,
                selected: action.identifier
            };

        default:
            return state;
    }
};

export default fois;
