const initialState = {
    saving: false,
    valid: false,
    nameValid: false,
    identifierValid: false,
    validatingName: false,
    validatingIdentifier: false,
    nameValidated: false,
    identifierValidated: false,
    data: {
        name: "",
        identifier: "",
        description: ""
    }
};

const samplingmethodform = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'SAMPLING_METHOD_FORM_RESET':
            return {
                ...initialState
            };

        case 'CHECK_SAMPLING_METHOD_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_SAMPLING_METHOD_NAME_OK':
            return {
                ...state,
                validatingName: false,
                nameValid: !action.json.data.exists,
                valid: (!action.json.data.exists && state.identifierValid),
                nameValidated: true
            };

        case 'CHECK_SAMPLING_METHOD_IDENTIFIER':
            return {
                ...state,
                validatingIdentifier: true
            };

        case 'CHECK_SAMPLING_METHOD_IDENTIFIER_OK':
            return {
                ...state,
                validatingIdentifier: false,
                identifierValid: !action.json.data.exists,
                valid: (!action.json.data.exists && state.nameValid),
                identifierValidated: true
            };

        case 'CREATE_SAMPLING_METHOD':
            return {
                ...state,
                saving: true
            };

        case 'CREATE_SAMPLING_METHOD_OK':
            return {
                ...state,
                saving: false
            };

        case 'SAMPLING_METHOD_FORM_SET_NAME':
            return {
                ...state,
                nameValidated: false,
                validatingName: true,
                valid: false,
                data: {
                    ...state.data,
                    name: action.name
                }
            };

        case 'SAMPLING_METHOD_FORM_SET_IDENTIFIER':
            return {
                ...state,
                identifierValidated: false,
                validatingIdentifier: true,
                valid: false,
                data: {
                    ...state.data,
                    identifier: action.identifier
                }
            };

        case 'SAMPLING_METHOD_FORM_SET_DESCRIPTION':
            return {
                ...state,
                data: {
                    ...state.data,
                    description: action.description
                }
            };

        default:
            return state;

    }
};

export default samplingmethodform;
