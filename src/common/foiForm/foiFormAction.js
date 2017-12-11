import {
    fetch
} from '../../actions/fetch';

import {setting} from '../../common';

export function foiform2entity(foi){
    let geom = {};
    switch (foi.type) {
        case setting._SAMPLING_POINT:
            geom = {
                type: "Point",
                coordinates: [
                    parseFloat(foi.point.x),
                    parseFloat(foi.point.y),
                    parseFloat(foi.point.z)
                ]
            }
            break;
        default:
            throw new Error("Feature of intereset \"" + foi.type + "\" unknown.");
    }
    return {
        description: foi.description,
        identifier: foi.identifier,
        name: foi.name,
        type: foi.type,
        //sampled_feature: [],
        shape: geom
    }
}

export function checkFoiName(text) {
    return fetch(
        "CHECK_FOI_NAME",
        {
            name: text
        }
    );
}

export function checkFoiIdentifier(text) {
    return fetch(
        "CHECK_FOI_IDENTIFIER",
        {
            identifier: text
        }
    );
}

export function create_foi(foi) {
    try {
        let entity = foiform2entity(foi);
        return fetch('CREATE_FOI', entity);
    } catch (e) {
        return {
            type: 'CREATE_FOI_ERROR',
            message: e
        }
    }
}

export const getFoiEntity = (foi, type = 'FOI_ENTITY') => {
    try {
        let entity = foiform2entity(foi);
        return {
            type: type,
            entity: entity
        }
    } catch (e) {
        return {
            type: 'CREATE_ENTITY_ERROR',
            message: e
        }
    }
}

export const foiNameChanged = (name) => {
    return {
        type: 'FOI_NAME_CHANGED',
        name: name
    }
}

export const foiIdentifierChanged = (identifier) => {
    return {
        type: 'FOI_IDENTIFIER_CHANGED',
        identifier: identifier
    }
}

export const foiDescriptionChanged = (description) => {
    return {
        type: 'FOI_DESCRIPTION_CHANGED',
        description: description
    }
}

export const foiSamplingSelected = (samplingType) => {
    return {
        type: 'FOI_SAMPLING_SELECTED',
        samplingType: samplingType
    }
}

export const foiSamplingForced = (samplingType) => {
    return {
        type: 'FOI_SAMPLING_FORCED',
        samplingType: samplingType
    }
}

export const foiPointXChanged = (x) => {
    return {
        type: 'FOI_POINT_X_CHANGED',
        x: x
    }
}

export const foiPointYChanged = (y) => {
    return {
        type: 'FOI_POINT_Y_CHANGED',
        y: y
    }
}

export const foiPointZChanged = (z) => {
    return {
        type: 'FOI_POINT_Z_CHANGED',
        z: z
    }
}

/*
export const foiGeometryAdded = (type, geom) => {
    return {
        type: 'FOI_GEOMETRY_ADDED',
        geom_type: type,
        geom: geom
    }
}

export const foiGeometryChanged = (type, geom) => {
    return {
        type: 'FOI_GEOMETRY_CHANGED',
        geom_type: type,
        geom: geom
    }
}*/
