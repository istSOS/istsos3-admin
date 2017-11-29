
const initialState = {
    isFetching: false,
    data: [],
    obsprop: [],
    from: null,
    to: null,
    enteredTo: null
};

const sensors = (state = initialState, action) => {

    //let copy;
    switch (action.type) {

        case 'FETCH_SENSORS':
            return Object.assign({}, state, {
                isFetching: true,
                data: []
            });

        case 'FETCH_SENSORS_OK':
            return Object.assign({}, state, {
                isFetching: false,
                data: action.json.data
            });

        case 'APPLY_OBSP_PROP_FILTER':
            return {
                ...state,
                obsprop: action.obsprop
            };

        case 'UPDATE_OBSP_PROP_DATE_RANGE':
            return {
                ...state,
                ...action.data
            };

        case 'RESET_OBSP_PROP_DATE_RANGE':
            return {
                ...state,
                from: null,
                to: null
            };

        default:
            return state;
    }
};

export default sensors;
