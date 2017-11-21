import {setting} from '../../../common';

const initialState = {
    wizardPage: 1,
    isFetching: false,
    skipSpecimen: false,

    // Initial config selection
    sensorType: null,
    observationType: null,

    // Sensor metadata
    material: null,
    featureOfInterest: {
        name: "test",
        geom: null
    },
    config: {},

    // Observable properties before add
    observableProperty: {
        uom: null,
        observedProperty: null,
        resultType: null
    },

    // Local store
    sensorTypes: {
        "1": {
            id: '1',
            name: "Insitu Fixed",
            description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
            fixed: true,
            icon: "/img/st/1.png",
            foiType: setting._SAMPLING_POINT
        },
        /*"2": {
            id: '2',
            name: "Insitu Mobile",
            description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
            fixed: false,
            icon: "/img/st/2.png",
            foiType: setting._SAMPLING_CURVE
        },*/
        "3": {
            id: '3',
            name: "Specimen fixed",
            description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
            fixed: true,
            icon: "/img/st/3.png",
            foiType: setting._SAMPLING_SPECIMEN
        }
    },

    observationTypes: {
        "1": {
            name: "Single Observation in Time",
            description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
            icon: "/img/ot/1.png"
        },
        "2": {
            name: "Multiple Observation in Time",
            description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.",
            icon: "/img/ot/2.png"
        }
    }
};

const insertsensor = (state = initialState, action) => {

    let copy, idx;

    switch (action.type) {

        case 'SET_INS_SENS_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: action.page
            };

        case 'PREVIEWS_INS_SENS_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: state.wizardPage === 0? 0: (state.wizardPage - 1)
            };

        case 'NEXT_INS_SENS_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: (state.wizardPage + 1)
            };

        case 'SKIP_SPECIMEN_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: (state.wizardPage + 1),
                skipSpecimen: true
            };

        case 'SELECT_SENSOR_TYPE':
            return {
                ...state,
                sensorType: action.sensorType,
                /*config: {
                    ...(
                        state.sensorTypes[
                            action.sensorType
                        ].foiType === setting._SAMPLING_SPECIMEN?
                        {
                            specimen: {
                                description: "",
                                identifier: "",
                                name: "",

                                sampledFeature: "",
                                materialClass: "",
                                samplingMethod: "",
                                samplingLocation: "",
                                size: {
                                    value: "",
                                    uom: ""
                                },
                                currentLocation: "",
                                specimenType: ""
                            }
                        }: null
                    )
                }*/
                /*,wizardPage: state.sensorTypes[
                    action.sensorType
                ].foiType === setting._SAMPLING_SPECIMEN? 2: 3*/
            };

        case 'SELECT_OBSERVATION_TYPE':
            return {
                ...state,
                observationType: action.observationType
            };

        case 'TOGGLE_OBSERVATION_TYPE':
            idx = state.resultType.indexOf(action.resultType);
            copy = {
                ...state
            }
            if (idx >= 0){
                // Type already selected, then remove it
                copy.resultType.splice(idx, 1);
            }else{
                // Type not selected, add it
                copy.resultType.push(action.resultType);
            }
            return copy;

        case 'INS_GEOMETRY_ADDED':
            let geom = {};
            if (action.geometryType === 'Point'){
                geom = {
                    "type": "point",
                    "coordinates": action.geometry
                }
            }
            copy = {
                ...state,
                featureOfInterest: {
                    ...state.featureOfInterest,
                    geom: geom
                }
            }
            return copy;

        case 'TOGGLE_OBSERVABLE_PROPERTY':
            idx = state.resultType.indexOf(action.observableProperty);
            copy = {
                ...state
            }
            if (idx >= 0){
                // Type already selected, then remove it
                copy.resultType.splice(idx, 1);
            }else{
                // Type not selected, add it
                copy.resultType.push(action.observableProperty);
            }
            return copy;

        case 'CREATE_SENSOR':
            return {
                ...state,
                isFetching: true
            };

        case 'CREATE_SENSOR_OK':
            return {
                ...initialState,
                isFetching: false,
                wizardPage: (state.wizardPage+1)
            };

        case 'CREATE_SENSOR_ERROR':
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }
};

export default insertsensor;
