
const initialState = {
    isFetching: false,
    dialog: false,
    selected: null,
    data: []
};

/*
Items:
    {
        "id": 1,
        "description": "millimeter",
        "name": "mm"
    }
*/
const uoms = (state = initialState, action) => {

    switch (action.type) {

        case 'FETCH_UOMS':
            return {
                ...state,
                isFetching: true,
                data: []
            };

        case 'UOM_DIALOG_VISIBILITY':
            return {
                ...state,
                dialog: action.open
            };

        case 'FETCH_UOMS_OK':
            return {
                ...state,
                isFetching: false,
                data: action.json.data
            };

        case 'UOM_SELECTED':
            return {
                ...state,
                selected: action.selected
            };

        case 'CREATE_UOM_OK':
            return {
                ...state,
                dialog: false,
                selected: action.json.data,
                data: [action.json.data, ...state.data]
            };

        default:
            return state;
    }
};

export default uoms;
