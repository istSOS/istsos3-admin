import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_observation_types,
    observationTypeSelected
} from './observationTypesAction'

import ObservationTypesComponent from './observationTypesComponent';

class Uoms extends Component {

    componentDidMount() {
        const {
            dispatch
        } = this.props;
        dispatch(fetch_observation_types());
    }

    render() {
        return(
            <ObservationTypesComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        observationtypes: state.observationtypes
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_observation_types: () => {
            dispatch(fetch_observation_types());
        },
        observationTypeSelected: (selected) => {
            dispatch(observationTypeSelected(selected));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Uoms));
