
const _foidef = "http://www.opengis.net/def/samplingFeatureType/OGC-OM/2.0/";

const initialState = {
    "wizardPage": 1,
    "isFetching": false,

    // Initial config selection
    "sensorType": null,
    "observationType": null,

    // Sensor metadata
    "name": "",
    "observableProperties": [],
    "featureOfInterest": {
        "name": "test",
        "geom": null
    },

    // Observable properties before add
    "observableProperty": {
        "uom": null,
        "observedProperty": null,
        "resultType": null
    },

    // Local store
    "sensorTypes": {
        "1": {
            "name": "Insitu Fixed",
            "fixed": true,
            "icon": "/images/st/1.jpg",
            "foiType": _foidef + "SF_SamplingPoint"
        },
        "2": {
            "name": "Insitu Mobile",
            "fixed": false,
            "icon": "/images/st/2.jpg",
            "foiType": _foidef + "SF_SamplingCurve"
        },
        "3": {
            "name": "Specimen fixed",
            "fixed": true,
            "icon": "/images/st/3.jpg",
            "foiType": _foidef + "SF_Specimen"
        }
    },

    "observationTypes": {
        "1": {
            "name": "Single Observation in Time",
            "icon": "/images/ot/1.jpg"
        },
        "2": {
            "name": "Multiple Observation in Time",
            "icon": "/images/ot/2.jpg"
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

        case 'SELECT_SENSOR_TYPE':
            return {
                ...state,
                sensorType: action.sensorType,
                wizardPage: 2
            };

        case 'SELECT_OBSERVATION_TYPE':
            return {
                ...state,
                observationType: action.observationType,
                wizardPage: 3
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

        case 'INS_UOM_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    uom: action.uom
                }
            };

        case 'INS_OBSERVED_PROPERTY_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    observedProperty: action.observedProperty
                }
            };

        case 'INS_RESULT_TYPE_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    resultType: action.resultType
                }
            };

        case 'SET_SENSOR_NAME':
            return {
                ...state,
                name: action.name
            };

        case 'INS_ADD_OBSERVABLE_PROPERTY':
            copy = {
                ...state
            }
            copy.observableProperties.push(state.observableProperty);
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

        case 'INS_REMOVE_OBSERVABLE_PROPERTY':
            copy = {
                ...state
            }
            copy.observableProperties.splice(action.index, 1);
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
            debugger;
            return {
                ...state,
                isFetching: false
            };

        case 'CREATE_SENSOR_ERROR':
            debugger;
            return {
                ...state,
                isFetching: false
            };

        default:
            return state;
    }
};

export default insertsensor;
