const initialState = {
    saving: false,
    valid: false,
    validatingName: false,
    validated: false,
    data: {
        name: "",
        description: ""
    }
};

const uomform = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'UOM_FORM_RESET':
            return {
                ...initialState
            };

        case 'CHECK_UOM_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_UOM_NAME_OK':
            return {
                ...state,
                validatingName: false,
                valid: !action.json.data.exists,
                validated: true
            };

        case 'CREATE_UOM':
            return {
                ...state,
                saving: true
            };

        case 'CREATE_UOM_OK':
            return {
                ...state,
                saving: false
            };

        case 'UOM_FORM_SET_NAME':
            return {
                ...state,
                validatingName: true,
                data: {
                    ...state.data,
                    name: action.name
                }
            };

        case 'UOM_FORM_SET_DESCRIPTION':
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

export default uomform;
