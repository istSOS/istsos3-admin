// *** REDUCERS ***

import { combineReducers } from 'redux';
import offerings from './offerings';
import offering from './offering';
import specimen from './specimen';
import observableproperties from './observableProperties';
import observationtypes from './observationTypes';
import uoms from './uoms';
import fois from './fois';
import insertsensor from '../create/sensor/insertSensorState';

const appState = combineReducers({
    offerings,
    offering,
    specimen,
    observableproperties,
    observationtypes,
    uoms,
    fois,
    insertsensor
});

export default appState;
