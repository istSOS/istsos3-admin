
const initialState = {
    isFetching: false,
    selected: null,
    data: []
};

const sensorsList = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'FETCH_SENSORS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_SENSORS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        case 'SENSOR_LIST_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        default:
            return state;
    }
};

export default sensorsList;
