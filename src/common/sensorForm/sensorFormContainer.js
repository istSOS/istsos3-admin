import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchUoms,
    fetchObservableProperties
} from 'istsos3-core';

import {
    setSensorName,
    checkSensorName,
    removeObservableProperty,
    addObservableProperty,
    observedPropertySelected,
    setKeyword,
    removeKeyword,
    updateMetadata,
    observablePropertySelected,
    observationTypeSelected,
    uomSelected
} from './sensorFormAction';

import SensorFormMetadata from './sensorFormMetadata';
import SensorFormObsProp from './sensorFormObsProp';

class SensorForm extends Component {
    componentDidMount() {
        const {
            dispatch,
            uoms,
            observed_properties,
            layout
        } = this.props;
        if(layout==="observedproperties"){
            if(uoms.data.length===0){
                dispatch(fetchUoms());
            }
            if(observed_properties.data.length===0){
                dispatch(fetchObservableProperties());
            }
        }
    }
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
        uoms: state.uoms,
        observed_properties: state.observableproperties,
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
        },
        observablePropertySelected: (selected) => {
            dispatch(observablePropertySelected(selected))
        },
        observationTypeSelected: (selected) => {
            dispatch(observationTypeSelected(selected))
        },
        uomSelected: (selected) => {
            dispatch(uomSelected(selected))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorForm);
