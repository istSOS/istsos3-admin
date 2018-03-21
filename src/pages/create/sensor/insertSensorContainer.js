import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


// import {
//     foiSamplingForced
// } from '../../../common/foiForm/foiFormAction';

import {
    toggleResultType,
    setWizardPage,
    nextWizardPage,
    prevWizardPage,
    register_sensor,
    geometryAdded,
    skipSpecimentPage,
    //selectFoi
} from './insertSensorAction';

import InsertSensorComponent from './insertSensorComponent';

class InsertSensorContainer extends Component {
    render() {
        return(
            <InsertSensorComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        insertsensor: state.web_insertsensor,
        fois: state.core_fois,
        map: state.core_map,
        foiform: state.foiform,
        foisstate: state.foisstate,
        observableproperties: state.observableproperties,
        sensorform: state.sensorform,
        specimenform: state.specimenform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        // selectSensorType: (sensorTypes) => {
        //     dispatch(
        //         selectSensorType(
        //             sensorTypes.id
        //         )
        //     );
        //     // Configure the foi form
        //     dispatch(
        //         foiSamplingForced(sensorTypes.foiType)
        //     );
        // },
        // selectObservationType: (id) => {
        //     dispatch(selectObservationType(id))
        // },
        // selectFoi: (foi) => {
        //     dispatch(selectFoi(foi))
        // },
        toggleResultType: (id) => {
            dispatch(toggleResultType(id))
        },
        setWizardPage: (id) => {
            dispatch(setWizardPage(id))
        },
        nextWizardPage: () => {
            dispatch(nextWizardPage())
        },
        skipSpecimentPage: () => {
            dispatch(skipSpecimentPage())
        },
        prevWizardPage: () => {
            dispatch(prevWizardPage())
        },
        geometryAdded: (geometryType, geometry) => {
            dispatch(geometryAdded(geometryType, geometry))
        },
        register_sensor: (insertsensor) => {
            dispatch(register_sensor(insertsensor));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(InsertSensorContainer));
