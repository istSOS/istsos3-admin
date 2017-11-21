
const initialState = {
    isFetching: false,
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
    geom: {},
    point: {
        x: 0,
        y: 0,
        z: 0
    }
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

        case 'FOI_SAMPLING_SELECTED':
            return validate({
                ...state,
                type: action.definition
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
                }
            };

        case 'FOI_POINT_Y_CHANGED':
            return {
                ...state,
                point: {
                    ...state.point,
                    y: action.y
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
            if(action.geom_type==='Point'){
                return {
                    ...state,
                    point: {
                        x: action.geom[0],
                        y: action.geom[1],
                        z: state.point.z
                    }
                };
            }else{
                return state;
            }

        case 'FOI_GEOMETRY_CHANGED':
            if(action.geom_type==='Point'){
                return {
                    ...state,
                    point: {
                        x: action.geom[0],
                        y: action.geom[1],
                        z: state.point.z
                    }
                };
            }else{
                return state;
            }

        default:
            return state;
    }
};

export default foiform;
