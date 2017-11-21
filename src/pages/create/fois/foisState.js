
const initialState = {
    isFetching: false,
    editing: false
};

const foisstate = (state = initialState, action) => {

    switch (action.type) {

        case 'FOI_EDIT':
            return {
                ...state,
                editing: action.editing
            };

        case 'FOI_EDIT_TOGGLE':
            return {
                ...state,
                editing: !state.editing
            };

        default:
            return state;
    }
};

export default foisstate;
