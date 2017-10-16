import {
    fetch
} from '../../actions/fetch';

export const selectSensorType = (id) => {
    return {
        type: 'SELECT_SENSOR_TYPE',
        sensorType: id
    }
}

export const selectObservationType = (id) => {
    return {
        type: 'SELECT_OBSERVATION_TYPE',
        observationType: id
    }
}

export const toggleResultType = (id) => {
    return {
        type: 'TOGGLE_OBSERVATION_TYPE',
        resultType: id
    }
}

export const setSensorName = (name) => {
    return {
        type: 'SET_SENSOR_NAME',
        name: name
    }
}

export const uomSelected = (uom) => {
    return {
        type: 'INS_UOM_SELECTED',
        uom: uom
    }
}

export const observedPropertySelected = (observedProperty) => {
    return {
        type: 'INS_OBSERVED_PROPERTY_SELECTED',
        observedProperty: observedProperty
    }
}

export const resultTypeSelected = (resultType) => {
    return {
        type: 'INS_RESULT_TYPE_SELECTED',
        resultType: resultType
    }
}

export const addObservableProperty = () => {
    return {
        type: 'INS_ADD_OBSERVABLE_PROPERTY'
    }
}

export const removeObservableProperty = (index) => {
    return {
        type: 'INS_REMOVE_OBSERVABLE_PROPERTY',
        index: index
    }
}

export const setWizardPage = (page) => {
    return {
        type: 'SET_INS_SENS_WIZARD_PAGE',
        page: page
    }
}

export const geometryAdded = (geometryType, geometry) => {
    return {
        type: 'INS_GEOMETRY_ADDED',
        geometryType: geometryType,
        geometry: geometry
    }
}

export function register_sensor(insertsensor) {
    let observable_property = [], observation_type = [], oty_check = [];
    for (let c = 0, l = insertsensor.observableProperties.length; c<l; c++){
        observable_property.push({
            "definition": insertsensor.observableProperties[
                c].observedProperty.def,
            "uom": insertsensor.observableProperties[c].uom.name,
            "type": insertsensor.observableProperties[c].resultType.definition
        });
        if (oty_check.indexOf(
            insertsensor.observableProperties[c].resultType.definition)===-1){
            oty_check.push(insertsensor.observableProperties[
                c].resultType.definition)
            observation_type.push({
                "definition": insertsensor.observableProperties[
                    c].resultType.definition
            })
        }
    }
    return fetch(
        'CREATE_SENSOR',
        {
            "name": insertsensor.name,
            "procedure": insertsensor.name,
            "procedure_description_format": [
                "http://www.opengis.net/sensorML/1.0.1"
            ],
            "observable_property": observable_property,
            "observation_type": observation_type,
            "foi_type": insertsensor.sensorTypes[
                insertsensor.sensorType
            ].foiType,
            "foi_name": ""
        }
    );
}
