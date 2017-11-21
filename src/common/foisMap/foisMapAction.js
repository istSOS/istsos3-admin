import {
    fetch
} from '../../actions/fetch';

export function fetch_fois() {
    return fetch(
        'FETCH_FOIS'
    );
}

export const foisMapUpdatePoint = (point) => {
    return {
        type: 'FOI_MAP_UPDATE_POINT',
        point: point
    }
}

export const foisMapUpdatePointOk = () => {
    return {
        type: 'FOI_MAP_UPDATE_POINT_OK'
    }
}

export const geometryAdded = (type, geom) => {
    return {
        type: 'FOI_GEOMETRY_ADDED',
        geom_type: type,
        geom: geom
    }
}

export const geometryChanged = (type, geom) => {
    return {
        type: 'FOI_GEOMETRY_CHANGED',
        geom_type: type,
        geom: geom
    }
}
