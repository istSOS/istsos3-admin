import {
    fetch
} from './fetch';

export function create_foi(entity, onSuccess = undefined) {
    return fetch('CREATE_FOI', entity, onSuccess);
}
