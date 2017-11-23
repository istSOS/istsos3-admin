import {
    fetch
} from '../../actions/fetch';

export function createHuman(data) {
    return fetch('CREATE_HUMAN', data);
}

export function checkHumanUsername(text) {
    return fetch(
        "CHECK_HUMAN_USERNAME",
        {
            username: text
        }
    );
}

export const setHumanUsername = (text) => {
    return {
        type: 'HUMAN_FORM_SET_USERNAME',
        username: text
    }
}

export const setHumanFirstname = (text) => {
    return {
        type: 'HUMAN_FORM_SET_FIRSTNAME',
        firstname: text
    }
}

export const setHumanMiddlename = (text) => {
    return {
        type: 'HUMAN_FORM_SET_MIDDLENAME',
        middlename: text
    }
}

export const setHumanLastname = (text) => {
    return {
        type: 'HUMAN_FORM_SET_LASTNAME',
        lastname: text
    }
}

export const setHumanOrganization = (text) => {
    return {
        type: 'HUMAN_FORM_SET_ORG',
        organisation: text
    }
}

export const setHumanPositon = (text) => {
    return {
        type: 'HUMAN_FORM_SET_POSITION',
        position: text
    }
}

export const setHumanRole = (text) => {
    return {
        type: 'HUMAN_FORM_SET_ROLE',
        role: text
    }
}
