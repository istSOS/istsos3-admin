const initialState = {
    valid: false,
    validatingName: false,
    validated: false,
    name: "",
    description: "",
    observableProperty: {
        uom: null,
        observedProperty: null,
        resultType: null
    },
    observableProperties: []
};

const sensorform = (state = initialState, action) => {
    let copy;
    switch (action.type) {

        case 'SENSOR_FORM_RESET':
            return {
                ...initialState
            };

        case 'CHECK_SENSOR_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_SENSOR_NAME_OK':
            return {
                ...state,
                validatingName: false,
                valid: !action.json.data.exists,
                validated: true
            };

        case 'SENSOR_FORM_SET_SENSOR_NAME':
            return {
                ...state,
                validated: false,
                validatingName: true,
                valid: false,
                name: action.name
            };

        case 'SENSOR_FORM_SET_SENSOR_DESCRIPTION':
            return {
                ...state,
                description: action.description
            };

        case 'OBSERVABLE_PROPERTY_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    observedProperty: action.selected
                }
            };

        case 'UOM_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    uom: action.selected
                }
            };

        case 'OBSERVATION_TYPE_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    resultType: action.selected
                }
            };

        case 'SENSOR_FORM_ADD_OBSERVABLE_PROPERTY':
            copy = {
                ...state
            }
            copy.observableProperties.push(state.observableProperty);
            return copy;

        case 'SENSOR_FORM_REMOVE_OBSERVABLE_PROPERTY':
            copy = {
                ...state
            }
            copy.observableProperties.splice(action.index, 1);
            return copy;

        default:
            return state;

    }
};

export default sensorform;
