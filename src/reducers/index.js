// *** REDUCERS ***

import { combineReducers } from 'redux';
import offerings from './offerings';
import offering from './offering';
import specimen from './specimen';
import observableproperties from '../common/observableProperties/observablePropertiesState';
import observationtypes from '../common/observationTypes/observationTypesState';
import uoms from '../common/uoms/uomsState';
import fois from './fois';
import foiform from '../common/foiForm/foiFormState';
import observablepropertyform from '../common/observablePropertyForm/observablePropertyFormState';
import sensorform from '../common/sensorForm/sensorFormState';
import specimenform from '../common/specimenForm/specimenFormState';
import uomform from '../common/uomForm/uomFormState';
import samplingtypes from './samplingtypes';
import sensors from '../pages/sensors/sensorsState';
import insertsensor from '../pages/create/sensor/insertSensorState';
import insertspecimen from '../pages/create/specimen/specimenState';
import foisstate from '../pages/create/fois/foisState';
import foismap from '../common/foisMap/foisMapState';
import domains from '../common/domainList/domainListState';
import materials from '../common/materials/materialsState';
import sensorsList from '../common/sensorsList/sensorsListState';

const appState = combineReducers({
    offerings,
    offering,
    specimen,
    materials,
    observableproperties,
    observationtypes,
    uoms,
    fois,
    foiform,
    observablepropertyform,
    sensorform,
    specimenform,
    foisstate,
    samplingtypes,
    sensors,
    insertsensor,
    insertspecimen,
    foismap,
    domains,
    uomform,
    sensorsList
});

export default appState;
