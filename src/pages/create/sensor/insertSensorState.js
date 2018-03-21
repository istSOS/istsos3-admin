//import {setting} from '../../../common';

const initialState = {
    wizardPage: 1,
    isFetching: false,
    skipSpecimen: false,
    newfoi: false,
    selectedFoi: null,

    sensor: null,
    metadataValid: false,
    observedPropertiesValid: false,

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
    }
};

const web_insertsensor = (state = initialState, action) => {

    let copy, idx;

    switch (action.type) {

        case 'SET_INS_SENS_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: action.page
            };

        case 'INSERT_SENSOR_EXISTING_FOI_SELECTED':
            return {
                ...state,
                selectedFoi: action.foi
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
                //wizardPage: (state.wizardPage + 2),
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

        case 'TOGGLE_FOI_EDIT':
            return {
                ...state,
                newfoi: action.status
            };

        // case 'SELECT_OBSERVATION_TYPE':
        //     return {
        //         ...state,
        //         observationType: action.observationType
        //     };

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

export default web_insertsensor;
