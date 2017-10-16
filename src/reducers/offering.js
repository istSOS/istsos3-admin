
const initialState = {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    data: {
        id: undefined,
        results: false,
        name: "",
        procedure: "",
        systemType: "",
        procedure_description_format: [
            "http://www.opengis.net/sensorML/1.0.1"
        ],
        observable_property: [],
        observation_type: [],
        observed_area: {
            lower_corner: [],
            upper_corner: []
        },
        phenomenon_time: {},
        result_time: {
            timeInstant: {
                instant: ""
            }
        },
        foi_type: "",
        foi_name: ""
    }
};

const offering = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'FETCHING_OFFERING':
            return Object.assign({}, state, {
                isFetching: true,
                data: []
            });

        case 'OFFERING_FETCHED':
            return Object.assign({}, state, {
                isFetching: false,
                data: action.json.data
            });

        default:
            return state;
    }
};

export default offering;
