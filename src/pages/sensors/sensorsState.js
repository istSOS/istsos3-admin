
const initialState = {
    isFetching: false,
    data: [],
    filter: {
        observableProperties: [],
        from: undefined,
        to: undefined
    },
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
                filter: {
                    ...state.filter,
                    observedProperties: action.observedProperties
                }
            };

        case 'UPDATE_OBSP_PROP_DATE_RANGE':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.data
                }
            };

        case 'RESET_OBSP_PROP_DATE_RANGE':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    from: undefined,
                    to: undefined
                }
            };

        default:
            return state;
    }
};

export default sensors;
