
const initialState = {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    data: []
};

const offerings = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'FETCH_OFFERINGS':
            return Object.assign({}, state, {
                isFetching: true,
                data: []
            });

        case 'FETCH_OFFERINGS_OK':
            return Object.assign({}, state, {
                isFetching: false,
                data: action.json.data
            });

        default:
            return state;
    }
};

export default offerings;
