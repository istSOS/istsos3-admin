const initialState = {
    saving: false,
    valid: false,

    // Username validation
    validatingUsername: false,
    usernameValidated: false,

    data: {
        id: null,
        username: "",
        pword: "",
        firstname: "",
        middlename: "",
        lastname: "",
        organisation: "",
        position: "",
        role: "",
        /*telephone: "",
        fax: "",
        email: "",
        web: "",
        address: "",
        city: "",
        adminarea: "",
        postalcode: "",
        country: ""*/
    }

};

const humanform = (state = initialState, action) => {
    //let copy;
    switch (action.type) {

        case 'HUMAN_FORM_RESET':
            return {
                ...initialState
            };

        case 'CREATE_HUMAN':
            return {
                ...state,
                saving: true
            };

        case 'CREATE_HUMAN_OK':
            return {
                ...state,
                saving: false
            };

        case 'CHECK_HUMAN_USERNAME':
            return {
                ...state,
                validatingUsername: true
            };

        case 'CHECK_HUMAN_USERNAME_OK':
            return {
                ...state,
                validatingUsername: false,
                valid: !action.json.data.exists,
                usernameValidated: true
            };

        case 'HUMAN_FORM_SET_USERNAME':
            return {
                ...state,
                validatingUsername: true,
                usernameValidated: false,
                valid: false,
                data: {
                    ...state.data,
                    username: action.username
                }
            };

        case 'HUMAN_FORM_SET_FIRSTNAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    firstname: action.firstname
                }
            };

        case 'HUMAN_FORM_SET_MIDDLENAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    middlename: action.middlename
                }
            };

        case 'HUMAN_FORM_SET_LASTNAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    lastname: action.lastname
                }
            };

        case 'HUMAN_FORM_SET_ORG':
            return {
                ...state,
                data: {
                    ...state.data,
                    organisation: action.organisation
                }
            };

        case 'HUMAN_FORM_SET_POSITION':
            return {
                ...state,
                data: {
                    ...state.data,
                    position: action.position
                }
            };

        case 'HUMAN_FORM_SET_ROLE':
            return {
                ...state,
                data: {
                    ...state.data,
                    role: action.role
                }
            };

        default:
            return state;

    }
};

export default humanform;
