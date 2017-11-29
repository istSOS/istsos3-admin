//import {setting} from '../../../common/setting';
import moment from 'moment';

const initialState = {
    isFetching: false,
    valid: false,

    // Identifier validation
    validatingIdentifier: false,
    identifierValid: false,
    identifierValidated: false,

    // Processing details
    processingDetailsValid: false,
    operator: null,
    details: null,
    processingTimeValid: false,
    processingDate: "",
    processingTime: "",

    // Sampling Time validation
    samplingTimeValid: false,

    // Specimen metadata
    date: "",
    time: "",
    data: {
        name: "",
        description: "",
        identifier: "",
        sampledFeature: {
            href: ""
        },
        materialClass: null,
        samplingTime: {
            timeInstant: {
                instant: ""
            }
        },
        samplingMethod: null,
        //samplingLocation: "",
        processingDetails: [],
        size: {
            value: "",
            uom: ""
        },
        currentLocation: {
            href: ""
        },
        specimenType: {
            href: ""
        }
    }
}

const isprocessingDetailsValid = (state) => {
    if (state.operator===null){
        return false;
    }else if (state.details===null) {
        return false;
    }else if (state.processingDate==="" || state.processingDate===null) {
        return false;
    }else if (state.processingTime==="" || state.processingTime===null) {
        return false;
    }
    return true;
}

const isValid = (state) => {
    if (state.data.identifier===""){
        return false;
    }
    if(state.data.materialClass===""){
        return false;
    }
    if(state.data.size.value===""){
        return false;
    }
    if(state.data.size.uom===""){
        return false;
    }
    if(state.identifierValid === false){
        return false;
    }
    if(state.samplingTimeValid === false){
        return false;
    }
    return true;
}

const specimenform = (state = initialState, action) => {
    let copy;
    switch (action.type) {

        case 'FETCH_SPECIMEN_FORM':
            return {
                ...state,
                isFetching: true
            };

        case 'FETCH_SPECIMEN_FORM_OK':
            return {
                ...state,
                isFetching: false,
                data: {
                    ...initialState.data,
                    ...action.json.data
                }
            };

        case 'SET_SPECIMEN_FORM_MATERIAL':
            copy = {
                ...state,
                data: {
                    ...state.data,
                    materialClass: action.material.definition === null?
                        null: {
                            href: action.material.definition
                        }
                }
            }
            copy.valid = isValid(copy);
            return copy;

        case 'SET_SPECIMEN_FORM_DESCRIPTION':
            return {
                ...state,
                data: {
                    ...state.data,
                    description: action.description
                }
            };

        case 'SET_SPECIMEN_FORM_SAMPLING_DATE':
            copy = {
                ...state,
                date: action.date,
                data: {
                    ...state.data,
                    samplingTime: {
                        timeInstant: {
                            instant: action.date + "T" + state.time + "+01:00"
                        }
                    }
                }
            };
            copy.samplingTimeValid = moment(
                copy.data.samplingTime.timeInstant.instant,
                moment.ISO_8601
            ).isValid()
            copy.valid = isValid(copy);
            return copy;

        case 'SET_SPECIMEN_FORM_SAMPLING_TIME':
            copy = {
                ...state,
                time: action.time,
                data: {
                    ...state.data,
                    samplingTime: {
                        timeInstant: {
                            instant: state.date + "T" + action.time + "+01:00"
                        }
                    }
                }
            };
            copy.samplingTimeValid = moment(
                copy.data.samplingTime.timeInstant.instant,
                moment.ISO_8601
            ).isValid()
            copy.valid = isValid(copy);
            return copy;

        case 'SET_SPECIMEN_FORM_IDENTIFIER':
            copy = {
                ...state,
                identifierValid: false,
                validatingIdentifier: action.identifier.length>0,
                valid: false,
                data: {
                    ...state.data,
                    identifier: action.identifier
                }
            };
            return copy;

        case 'CHECK_SPECIMEN_IDENTIFIER':
            return {
                ...state,
                valid: false,
                validatingIdentifier: true
            };

        case 'CHECK_SPECIMEN_IDENTIFIER_OK':
            copy = {
                ...state,
                validatingIdentifier: false,
                identifierValid: !action.json.data.exists,
                identifierValidated: true
            };
            copy.valid = isValid(copy);
            return copy;

        case 'SET_SPECIMEN_FORM_NAME':
            return {
                ...state,
                data: {
                    ...state.data,
                    name: action.name
                }
            };

        case 'SET_SPECIMEN_FORM_SIZE_VALUE':
            copy = {
                ...state,
                data: {
                    ...state.data,
                    size: {
                        ...state.data.size,
                        value: action.value
                    }
                }
            };
            copy.valid = isValid(copy);
            return copy;

        case 'SET_SPECIMEN_FORM_SIZE_UOM':
            copy = {
                ...state,
                data: {
                    ...state.data,
                    size: {
                        ...state.data.size,
                        uom: action.uom
                    }
                }
            };
            copy.valid = isValid(copy);
            return copy;

        case 'SET_SPECIMEN_FORM_CURRENT_LOCATION':
            return {
                ...state,
                data: {
                    ...state.data,
                    currentLocation: action.currentLocation
                }
            };

        case 'SET_SPECIMEN_FORM_TYPE':
            return {
                ...state,
                data: {
                    ...state.data,
                    specimenType: action.specimenType
                }
            };

        case 'SET_SPECIMEN_FORM_SAMPLED_FEATURE':
            return {
                ...state,
                data: {
                    ...state.data,
                    sampledFeature: {
                        href: action.sampledFeature
                    }
                }
            };

        case 'SET_SPECIMEN_FORM_SAMPLING_METHOD':
            return {
                ...state,
                data: {
                    ...state.data,
                    samplingMethod: action.samplingMethod === null?
                        null: {
                            href: action.samplingMethod
                        }
                }
            };

        case 'ADD_SPECIMEN_PROCESSING_DETAILS':
            copy = {
                ...state,
                data: {
                    ...state.data,
                    processingDetails: [
                        ...state.data.processingDetails,
                        {
                            processOperator: {
                                href: state.operator.username
                            },
                            processingDetails: {
                                href: state.details.identifier
                            },
                            time: {
                                timeInstant: {
                                    instant: state.processingDate + "T" + state.processingTime + "+01:00"
                                }
                            }
                        }
                    ]
                }
            };
            copy.processingDetailsValid = isprocessingDetailsValid(copy)
            return copy;

        case 'REMOVE_SPECIMEN_PROCESSING_DETAILS':
            copy = {
                ...state
            }
            copy.data.processingDetails.splice(action.index, 1);
            return copy;

        case 'SET_SPECIMEN_PROCESSING_OPERATOR':
            copy = {
                ...state,
                operator: action.operator
            };
            copy.processingDetailsValid = isprocessingDetailsValid(copy)
            return copy;


        case 'SET_SPECIMEN_PROCESSING_DETAILS':
            copy = {
                ...state,
                details: action.details
            };
            copy.processingDetailsValid = isprocessingDetailsValid(copy)
            return copy;

        case 'SET_SPECIMEN_FORM_PROCESSING_DATE':
            copy = {
                ...state,
                processingDate: action.date
            };
            copy.processingDetailsValid = isprocessingDetailsValid(copy)
            return copy;

        case 'SET_SPECIMEN_FORM_PROCESSING_TIME':
            copy = {
                ...state,
                processingTime: action.time
            };
            copy.processingDetailsValid = isprocessingDetailsValid(copy)
            return copy;

        default:
            return state;
    }
}

export default specimenform;
