import {
    fetch
} from './fetch';

export function createSpecimen(entity) {
    return fetch("CREATE_SPECIMEN", entity);
}
