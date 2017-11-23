import { normalize, schema } from 'normalizr';

const initialState = {
    isFetching: false,
    data: [],
    selected: '',
    normalized: []
};

const material = new schema.Entity('material');

const materials = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_MATERIALS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'FETCH_MATERIALS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data,
                normalized: normalize(action.json.data, material)
            };

        case 'MATERIALS_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        default:
            return state;
    }
};

export default materials;
