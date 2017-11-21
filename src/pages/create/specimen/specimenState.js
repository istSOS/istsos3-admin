//import {setting} from '../../../common/setting';

const initialState = {
    wizardPage: 1,
    isFetching: false,
    offering: null
}

const insertspecimen = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_SPECIMEN_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: action.page
            };

        case 'NEXT_INS_SPEC_WIZARD_PAGE':
            return {
                ...state,
                wizardPage: (state.wizardPage + 1)
            };

        default:
            return state;
    }
}

export default insertspecimen;
