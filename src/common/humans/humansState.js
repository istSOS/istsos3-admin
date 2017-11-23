const initialState = {
    isFetching: false,
    dialog: false,
    selected: null,
    data: []
};

const humans = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_HUMANS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'HUMANS_DIALOG_VISIBILITY':
            return {
                ...state,
                dialog: action.open
            };

        case 'FETCH_HUMANS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        case 'CREATE_HUMAN_OK':
            debugger;
            return {
                ...state,
                dialog: false,
                data: [action.json.data, ...state.data]
            };

        default:
            return state;
    }
};

export default humans;
