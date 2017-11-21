
const initialState = {
    isFetching: false,
    data: []
};

const sensors = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'FETCH_SENSORS':
            console.log("FETCH_SENSORS");
            return Object.assign({}, state, {
                isFetching: true,
                data: []
            });

        case 'FETCH_SENSORS_OK':
            console.log("FETCH_SENSORS_OK");
            return Object.assign({}, state, {
                isFetching: false,
                data: action.json.data
            });

        default:
            return state;
    }
};

export default sensors;
