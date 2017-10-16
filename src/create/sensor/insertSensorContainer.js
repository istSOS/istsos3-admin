import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    selectSensorType,
    selectObservationType,
    toggleResultType,
    uomSelected,
    observedPropertySelected,
    resultTypeSelected,
    setSensorName,
    addObservableProperty,
    removeObservableProperty,
    setWizardPage,
    register_sensor,
    geometryAdded
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
        observableproperties: state.observableproperties
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        selectSensorType: (id) => {
            dispatch(selectSensorType(id))
        },
        selectObservationType: (id) => {
            dispatch(selectObservationType(id))
        },
        toggleResultType: (id) => {
            dispatch(toggleResultType(id))
        },
        setSensorName: (name) => {
            dispatch(setSensorName(name))
        },
        uomSelected: (uom) => {
            dispatch(uomSelected(uom))
        },
        observedPropertySelected: (observedProperty) => {
            dispatch(observedPropertySelected(observedProperty))
        },
        resultTypeSelected: (resultType) => {
            dispatch(resultTypeSelected(resultType))
        },
        addObservableProperty: () => {
            dispatch(addObservableProperty())
        },
        removeObservableProperty: (index) => {
            dispatch(removeObservableProperty(index))
        },
        setWizardPage: (id) => {
            dispatch(setWizardPage(id))
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
