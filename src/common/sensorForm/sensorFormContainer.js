import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    setSensorName,
    checkSensorName,
    setSensorDescription,
    removeObservableProperty,
    addObservableProperty,
    observedPropertySelected
} from './sensorFormAction';

import SensorFormMetadata from './sensorFormMetadata';
import SensorFormObsProp from './sensorFormObsProp';

class SensorForm extends Component {
    render() {
        const {
            layout
        } = this.props;
        if (layout==="metadata"){
            return(
                <SensorFormMetadata
                    {...this.props}/>
            );
        }else if(layout==="observedproperties"){
            return(
                <SensorFormObsProp
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        sensorform: state.sensorform,
        layout: 'metadata',
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        setSensorName: (text) => {
            dispatch(setSensorName(text))
        },
        checkSensorName: (text) => {
            dispatch(checkSensorName(text))
        },
        setSensorDescription: (text) => {
            dispatch(setSensorDescription(text))
        },
        addObservableProperty: () => {
            dispatch(addObservableProperty());
        },
        removeObservableProperty: (index) => {
            dispatch(removeObservableProperty(index))
        },
        observedPropertySelected: (observedProperty) => {
            dispatch(observedPropertySelected(observedProperty))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorForm);
