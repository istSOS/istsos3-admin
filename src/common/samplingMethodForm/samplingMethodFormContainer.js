import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    createSamplingMethod,
    setSamplingMethodName,
    setSamplingMethodDescription,
    setSamplingMethodIdentifier,
    checkSamplingMethodName,
    checkSamplingMethodIdentifier
} from './samplingMethodFormAction';

import SamplingMethodFormComponent from './samplingMethodFormComponent';

class SamplingMethodForm extends Component {
    render() {
        return(
            <SamplingMethodFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        samplingmethodform: state.samplingmethodform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        createSamplingMethod: (data) => {
            dispatch(createSamplingMethod(data))
        },
        checkSamplingMethodName: (text) => {
            dispatch(checkSamplingMethodName(text))
        },
        checkSamplingMethodIdentifier: (text) => {
            dispatch(checkSamplingMethodIdentifier(text))
        },
        setSamplingMethodName: (text) => {
            dispatch(setSamplingMethodName(text))
        },
        setSamplingMethodIdentifier: (text) => {
            dispatch(setSamplingMethodIdentifier(text))
        },
        setSamplingMethodDescription: (text) => {
            dispatch(setSamplingMethodDescription(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SamplingMethodForm);
