const initialState = {
    isFetching: false,
    dialog: false,
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

        case 'CREATE_PROCESSING_DETAIL_OK':
            return {
                ...state,
                dialog: false,
                data: [action.json.data, ...state.data]
            };

        case 'PROCESSING_DETAILS_DIALOG_VISIBILITY':
            return {
                ...state,
                dialog: action.open
            };

        default:
            return state;
    }
};

export default processingdetails;
