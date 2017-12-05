import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    setSensorName,
    checkSensorName,
    removeObservableProperty,
    addObservableProperty,
    observedPropertySelected,
    setKeyword,
    removeKeyword,
    updateMetadata
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
        addObservableProperty: () => {
            dispatch(addObservableProperty());
        },
        removeObservableProperty: (index) => {
            dispatch(removeObservableProperty(index))
        },
        observedPropertySelected: (observedProperty) => {
            dispatch(observedPropertySelected(observedProperty))
        },
        setKeyword: (keyword) => {
            dispatch(setKeyword(keyword))
        },
        removeKeyword: (index) => {
            dispatch(removeKeyword(index))
        },
        updateMetadata: (key, value) => {
            dispatch(updateMetadata(key, value))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorForm);
