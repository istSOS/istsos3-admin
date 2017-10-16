
const initialState = {
    isFetching: false,
    isAdding: false,
    isDeleting: false,
    data: {
        description: "",
        identifier: "",
        name: "",
        type: {
            href: "",
            rel: "",
            title: ""
        },
        sampledFeature: {
            href: "",
            rel: "",
            title: ""
        },
        materialClass: {
            href: "",
            rel: "",
            title: ""
        },
        samplingTime: {
            timeInstant: {
                instant: ""
            }
        },
        samplingMethod: {
            href: "",
            rel: "",
            title: ""
        },
        samplingLocation: {
            type: "point",
            coordinates: []
        },
        processingDetails: [],
        size: {
            value: "",
            uom: ""
        },
        currentLocation: {
            href: "",
            rel: "",
            title: ""
        },
        specimenType: null
    }
};

const specimen = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'FETCHING_OFFERINGS':
            return Object.assign({}, state, {
                isFetching: true,
                data: []
            });

        case 'OFFERINGS_FETCHED':
            return Object.assign({}, state, {
                isFetching: false,
                data: action.json.data
            });

        default:
            return state;
    }
};

export default specimen;
