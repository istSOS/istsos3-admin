import {
    fetch
} from '../../../actions/fetch';

export function register_sensor(data) {
    return fetch('CREATE_SENSOR', data);
}

// export const selectObservationType = (id) => {
//     return {
//         type: 'SELECT_OBSERVATION_TYPE',
//         observationType: id
//     }
// }

// export const selectFoi = (foi) => {
//     return {
//         type: 'INSERT_SENSOR_EXISTING_FOI_SELECTED',
//         foi: foi
//     }
// }

export const toggleResultType = (id) => {
    return {
        type: 'TOGGLE_OBSERVATION_TYPE',
        resultType: id
    }
}

// export const toggleFoiEdit = (status) => {
//     return {
//         type: 'TOGGLE_FOI_EDIT',
//         status: status
//     }
// }

export const setWizardPage = (page) => {
    return {
        type: 'SET_INS_SENS_WIZARD_PAGE',
        page: page
    }
}

export const prevWizardPage = (page) => {
    return {
        type: 'PREVIEWS_INS_SENS_WIZARD_PAGE'
    }
}

export const nextWizardPage = () => {
    return {
        type: 'NEXT_INS_SENS_WIZARD_PAGE'
    }
}

export const skipSpecimentPage = () => {
    return {
        type: 'SKIP_SPECIMEN_WIZARD_PAGE'
    }
}

export const geometryAdded = (geometryType, geometry) => {
    return {
        type: 'INS_GEOMETRY_ADDED',
        geometryType: geometryType,
        geometry: geometry
    }
}
