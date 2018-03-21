import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_sampling_types
} from './samplingTypesAction'

import SamplingTypesComponent from './samplingTypesComponent';

class SamplingTypes extends Component {

    componentDidMount() {
        const {
            fetch_sampling_types
        } = this.props;
        fetch_sampling_types();
    }

    render() {
        return(
            <SamplingTypesComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        samplingtypes: state.samplingtypes
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_sampling_types: () => {
            dispatch(fetch_sampling_types());
        },
        ...ownProps
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SamplingTypes));
