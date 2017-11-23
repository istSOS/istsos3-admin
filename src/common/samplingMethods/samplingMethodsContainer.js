import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetchSamplingMethods,
    samplingMethodSelected,
    openDialog
} from './samplingMethodsAction'

import SamplingMethodsComponent from './samplingMethodsComponent';

class SamplingMethods extends Component {

    componentDidMount() {
        const {
            fetchSamplingMethods
        } = this.props;
        fetchSamplingMethods();
    }

    render() {
        return(
            <SamplingMethodsComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        samplingmethods: state.samplingmethods
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetchSamplingMethods: () => {
            dispatch(fetchSamplingMethods());
        },
        samplingMethodSelected: (selected) => {
            dispatch(samplingMethodSelected(selected));
        },
        openDialog: (open) => {
            dispatch(openDialog(open))
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SamplingMethods));
