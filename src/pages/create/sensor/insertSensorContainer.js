import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import {
    foiSamplingForced
} from '../../../common/foiForm/foiFormAction';

import {
    selectSensorType,
    selectObservationType,
    toggleResultType,
    setWizardPage,
    nextWizardPage,
    prevWizardPage,
    register_sensor,
    geometryAdded,
    skipSpecimentPage,
    toggleFoiEdit
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
        insertsensor: state.insertsensor,
        fois: state.fois,
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
        selectSensorType: (sensorTypes) => {
            dispatch(
                selectSensorType(
                    sensorTypes.id
                )
            );
            debugger;
            console.log("ciao");
            // Configure the foi form
            dispatch(
                foiSamplingForced(sensorTypes.foiType)
            );
        },
        selectObservationType: (id) => {
            dispatch(selectObservationType(id))
        },
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
        },
        toggleFoiEdit: (status) => {
            dispatch(toggleFoiEdit(status));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(InsertSensorContainer));
