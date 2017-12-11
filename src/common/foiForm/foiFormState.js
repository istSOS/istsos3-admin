import {setting} from '../../common';

const initialState = {
    isFetching: false,
    validMeta: false,
    valid: false,

    // Name server side validation
    nameValid: false,
    validatingName: false,
    nameValidated: false,

    // Identifier server side validation
    identifierValid: false,
    validatingIdentifier: false,
    identifierValidated: false,

    description: "",
    identifier: "",
    name: "",
    type: undefined,
    typeForced: false,

    point: {
        x: 0,
        y: 0,
        z: 0
    },

    shape: null
};

const validate = (state) => {
    let valid = false;
    if(
        state.nameValid === true &&
        state.identifierValid === true &&
        state.type !== undefined){
        valid = true;
    }
    return {
        ...state,
        valid: valid
    }
}

const foiform = (state = initialState, action) => {

    switch (action.type) {

        case 'FOI_FORM_RESET':
            return {
                ...initialState
            };

        case 'FOI_SAMPLING_SELECTED':
            let coordinates = [];
            switch (action.definition) {
                case setting._SAMPLING_POINT:
                    coordinates = [0,0];
                    break;
                default:
            }

            return validate({
                ...state,
                type: action.samplingType.definition,
                shape: {
                    type: action.samplingType.name,
                    coordinates: coordinates
                }
            });

        case 'FOI_SAMPLING_FORCED':
            return {
                ...state,
                type: action.samplingType,
                typeForced: true
            };

        case 'FOI_NAME_CHANGED':
            return {
                ...state,
                valid: false,
                nameValid: false,
                validatingName: action.name.length>0,
                name: action.name
            };

        case 'CHECK_FOI_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_FOI_NAME_OK':
            return validate({
                ...state,
                validatingName: false,
                nameValid: !action.json.data.exists,
                nameValidated: true
            });

        case 'FOI_IDENTIFIER_CHANGED':
            return {
                ...state,
                valid: false,
                identifierValid: false,
                validatingIdentifier: action.identifier.length>0,
                identifier: action.identifier
            };

        case 'CHECK_FOI_IDENTIFIER':
            return {
                ...state,
                validatingIdentifier: true
            };

        case 'CHECK_FOI_IDENTIFIER_OK':
            return validate({
                ...state,
                validatingIdentifier: false,
                identifierValid: !action.json.data.exists,
                identifierValidated: true
            });

        case 'FOI_DESCRIPTION_CHANGED':
            return {
                ...state,
                description: action.description
            };

        case 'FOI_POINT_X_CHANGED':
            return {
                ...state,
                point: {
                    ...state.point,
                    x: action.x
                },
                shape: {
                    ...state.shape,
                    coordinates: [
                        action.x !== ''?
                            parseFloat(action.x): 0,
                        state.shape.coordinates[1]
                    ]
                }
            };

        case 'FOI_POINT_Y_CHANGED':
            return {
                ...state,
                point: {
                    ...state.point,
                    y: action.y
                },
                shape: {
                    ...state.shape,
                    coordinates: [
                        state.shape.coordinates[0],
                        action.y !== ''?
                            parseFloat(action.y): 0
                    ]
                }
            };

        case 'FOI_POINT_Z_CHANGED':
            return {
                ...state,
                point: {
                    ...state.point,
                    z: action.z
                }
            };

        case 'FOI_GEOMETRY_ADDED':
            switch (action.geom_type) {
                case setting._SAMPLING_POINT:
                    return {
                        ...state,
                        point: {
                            x: action.geom[0],
                            y: action.geom[1],
                            z: state.point.z
                        },
                        shape: {
                            ...state.shape,
                            coordinates: action.geom
                        }
                    };
                default:
                    return state;
            }

        case 'FOI_GEOMETRY_CHANGED':
            switch (action.geom_type) {
                case 'Point':
                    return {
                        ...state,
                        point: {
                            x: action.geom[0],
                            y: action.geom[1],
                            z: state.point.z
                        },
                        shape: {
                            ...state.shape,
                            coordinates: action.geom
                        }
                    };
                default:
                    return state;
            }

        default:
            return state;
    }
};

export default foiform;
