const initialState = {
    saving: false,
    valid: false,
    nameValid: false,
    definitionValid: false,
    validatingName: false,
    validatingDefinition: false,
    nameValidated: false,
    definitionValidated: false,
    data: {
        name: "",
        definition: "urn:ogc:def:parameter:x-istsos:1.0:",
        description: ""
    }
};

const observablepropertyform = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'OBSERVABLE_PROPERTY_FORM_RESET':
            return {
                ...initialState
            };

        case 'CHECK_OBSERVABLE_PROPERTY_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_OBSERVABLE_PROPERTY_NAME_OK':
            return {
                ...state,
                validatingName: false,
                nameValid: !action.json.data.exists,
                valid: (!action.json.data.exists && state.definitionValid),
                nameValidated: true
            };

        case 'CHECK_OBSERVABLE_PROPERTY_DEFINITION':
            return {
                ...state,
                validatingDefinition: true
            };

        case 'CHECK_OBSERVABLE_PROPERTY_DEFINITION_OK':
            return {
                ...state,
                validatingDefinition: false,
                definitionValid: !action.json.data.exists,
                valid: (!action.json.data.exists && state.nameValid),
                definitionValidated: true
            };

        case 'CREATE_OBSERVABLE_PROPERTY':
            return {
                ...state,
                saving: true
            };

        case 'CREATE_OBSERVABLE_PROPERTY_OK':
            return {
                ...state,
                saving: false
            };

        case 'OBSERVABLE_PROPERTY_FORM_SET_NAME':
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

        case 'OBSERVABLE_PROPERTY_FORM_SET_DEFINITION':
            return {
                ...state,
                definitionValidated: false,
                validatingDefinition: true,
                valid: false,
                data: {
                    ...state.data,
                    definition: action.definition
                }
            };

        default:
            return state;

    }
};

export default observablepropertyform;
