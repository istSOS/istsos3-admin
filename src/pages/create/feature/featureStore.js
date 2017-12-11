
const initialState = {
    saving: false,
    saved: false,
    editing: false
};

const featureWizard = (state = initialState, action) => {

    switch (action.type) {

        case 'CREATE_FOI':
            return {
                ...state,
                saving: true,
                saved: false
            };

        case 'FOI_WIZARD_FINISH':
            return {
                ...state,
                saving: false,
                saved: true
            };

        default:
            return state;
    }
};

export default featureWizard;
