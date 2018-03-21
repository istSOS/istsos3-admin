const initialState = {
    valid: false,
    validatingName: false,
    validated: false,
    name: '',
    observableProperty: {
        uom: null,
        observedProperty: null,
        resultType: null
    },

    // OPTIONAL METADATA

    // General Info
    keyword: '',
    alias: '',
    keywords: [],
    description: '',

    // Identification
    manufacturer: null,
    modelNumber: '',
    serialNumber: '',

    // Capabilities
    samplingTimeResolution: '',
    samplingTimeResolutionValid: true,
    acquisitionTimeResolution: '',
    acquisitionTimeResolutionValid: true,
    storageCapacity: '',
    batteryCapacity: '',

    // Contacts
    owner: null,
    operator: null,

    observableProperties: []
};

const sensorform = (state = initialState, action) => {
    let copy;
    switch (action.type) {

        case 'SENSOR_FORM_RESET':
            return {
                ...initialState
            };

        case 'CHECK_SENSOR_NAME':
            return {
                ...state,
                validatingName: true
            };

        case 'CHECK_SENSOR_NAME_OK':
            return {
                ...state,
                validatingName: false,
                valid: !action.json.data.exists,
                validated: true
            };

        case 'SENSOR_FORM_SET_SENSOR_NAME':
            return {
                ...state,
                validated: false,
                validatingName: true,
                valid: false,
                name: action.name
            };

        case 'SENSOR_FORM_SET_KEYWORD':
            let keyword = action.keyword;
            let keywords = state.keywords;
            if(keyword.indexOf(',')>=0){
                keywords = keyword.split(",");
                if(keywords.length>1){
                    keyword = keywords.pop();
                    keywords = state.keywords.concat(keywords);
                }else{
                    keyword = keywords[0];
                }
            }
            return {
                ...state,
                keyword: keyword,
                keywords: keywords
            };

        case 'SENSOR_FORM_REMOVE_KEYWORD':
            copy = {
                ...state
            }
            copy.keywords.splice(action.index, 1);
            return copy;

        case 'SENSOR_FORM_OP_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    observedProperty: action.selected
                }
            };

        case 'SENSOR_FORM_UOM_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    uom: action.selected
                }
            };

        case 'SENSOR_FORM_OTY_SELECTED':
            return {
                ...state,
                observableProperty: {
                    ...state.observableProperty,
                    resultType: action.selected
                }
            };

        case 'SENSOR_FORM_ADD_OBSERVABLE_PROPERTY':
            copy = {
                ...state
            }
            copy.observableProperties.push(state.observableProperty);
            return copy;

        case 'SENSOR_FORM_REMOVE_OBSERVABLE_PROPERTY':
            copy = {
                ...state
            }
            copy.observableProperties.splice(action.index, 1);
            return copy;

        case 'SENSOR_FORM_UPDATE_META':
            copy = {
                ...state
            }
            let meta = {};
            meta[action.key] = action.value;
            if(['samplingTimeResolution', 'acquisitionTimeResolution'].indexOf(action.key) > -1){
                if(action.value===''){
                    copy[action.key+'Valid'] = true;
                }else{
                    let re = /^(-?)P(?=\d|T\d)(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)([DW]))?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?)?$/;
                    let res = re.exec(action.value);
                    copy[action.key+'Valid'] =
                        res === null ? false: true;
                }
            }
            return {
                ...copy,
                ...meta
            };

        default:
            return state;

    }
};

export default sensorform;
