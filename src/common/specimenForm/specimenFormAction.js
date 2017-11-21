import {
    fetch
} from '../../actions/fetch';

export function loadSpecimen(specimen){
    return function(dispatch){
        dispatch({
            type: 'MATERIALS_SELECTED',
            selected: specimen.materialClass
        });
        dispatch({
            type: 'UOM_SELECTED',
            selected: specimen.size.uom
        });
        dispatch({
            type: 'FETCH_SPECIMEN_FORM_OK',
            json: {
                data: specimen
            }
        });
    }
};

export const setMaterial = (material) => {
    return {
        type: 'SET_SPECIMEN_FORM_MATERIAL',
        material: material
    }
}

export const setSpecimenIdentifier = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_IDENTIFIER',
        identifier: text
    }
}

export function checkSpecimenIdentifier(text) {
    return fetch(
        "CHECK_SPECIMEN_IDENTIFIER",
        {
            identifier: text
        }
    );
}

export const setSpecimenName = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_NAME',
        name: text
    }
}

export const setSpecimenDescription = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_DESCRIPTION',
        description: text
    }
}

export const setSpecimenSampligDate = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_SAMPLING_DATE',
        date: text
    }
}

export const setSpecimenSampligTime = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_SAMPLING_TIME',
        time: text
    }
}

export const setSpecimenSizeValue = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_SIZE_VALUE',
        value: text
    }
}

export const setSpecimenSizeUom = (uom) => {
    return {
        type: 'SET_SPECIMEN_FORM_SIZE_UOM',
        uom: uom
    }
}

export const setSpecimenSamplingLocation = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_SAMPLING_LOCATION',
        samplingLocation: text
    }
}

export const setSpecimenCurrentLocation = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_CURRENT_LOCATION',
        currentLocation: text
    }
}

export const setSpecimenSampledFeature = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_SAMPLED_FEATURE',
        sampledFeature: text
    }
}

export const setSpecimenSamplingMethod = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_SAMPLING_METHOD',
        samplingMethod: text
    }
}

export const setSpecimenSpecimenType = (text) => {
    return {
        type: 'SET_SPECIMEN_FORM_TYPE',
        specimenType: text
    }
}
