const initialState = {
    isFetching: false,
    data: []
};

const processingdetails = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_PROCESSING_DETAILS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_PROCESSING_DETAILS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        default:
            return state;
    }
};

export default processingdetails;
