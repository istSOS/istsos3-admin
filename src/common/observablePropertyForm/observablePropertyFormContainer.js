import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    createObservableProperty,
    setObservablePropertyName,
    setObservablePropertyDefinition,
    checkObservablePropertyName,
    checkObservablePropertyDefinition
} from './observablePropertyFormAction';

import ObservablePropertyFormComponent from './observablePropertyFormComponent';

class ObservablePropertyForm extends Component {
    render() {
        return(
            <ObservablePropertyFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        observablepropertyform: state.observablepropertyform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        createObservableProperty: (data) => {
            dispatch(createObservableProperty(data))
        },
        checkObservablePropertyName: (text) => {
            dispatch(checkObservablePropertyName(text))
        },
        checkObservablePropertyDefinition: (text) => {
            dispatch(checkObservablePropertyDefinition(text))
        },
        setObservablePropertyName: (text) => {
            dispatch(setObservablePropertyName(text))
        },
        setObservablePropertyDefinition: (text) => {
            dispatch(setObservablePropertyDefinition(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ObservablePropertyForm);
