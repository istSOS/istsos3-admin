const initialState = {
    saving: false,
    valid: false,

    nameValid: false,
    validatingName: false,
    nameValidated: false,

    identifierValid: false,
    validatingIdentifier: false,
    identifierValidated: false,

    data: {
        name: "",
        identifier: "",
        description: ""
    }
};

const processingdetailform = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'PROCESSING_DETAIL_FORM_RESET':
            return {
                ...initialState
            };

        case 'CHECK_PROCESSING_DETAIL_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_PROCESSING_DETAIL_NAME_OK':
            return {
                ...state,
                validatingName: false,
                nameValid: !action.json.data.exists,
                valid: (!action.json.data.exists && state.identifierValid),
                nameValidated: true
            };

        case 'CHECK_PROCESSING_DETAIL_IDENTIFIER':
            return {
                ...state,
                validatingIdentifier: true
            };

        case 'CHECK_PROCESSING_DETAIL_IDENTIFIER_OK':
            return {
                ...state,
                validatingIdentifier: false,
                identifierValid: !action.json.data.exists,
                valid: (!action.json.data.exists && state.nameValid),
                identifierValidated: true
            };

        case 'CREATE_PROCESSING_DETAIL':
            return {
                ...state,
                saving: true
            };

        case 'CREATE_PROCESSING_DETAIL_OK':
            return {
                ...state,
                saving: false
            };

        case 'PROCESSING_DETAIL_FORM_SET_NAME':
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

        case 'PROCESSING_DETAIL_FORM_SET_IDENTIFIER':
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

        case 'PROCESSING_DETAIL_FORM_SET_DESCRIPTION':
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

export default processingdetailform;
