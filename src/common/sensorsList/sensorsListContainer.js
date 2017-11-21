import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchSensors,
    sensorSelected
} from './sensorsListAction';

import SensorsListComponent from './sensorsListComponent';


class SensorsList extends Component {

    componentDidMount() {
        const {
            fetchSensors,
            filters
        } = this.props;
        fetchSensors(filters);
    }

    render() {
        return(
            <SensorsListComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        sensors: state.sensorsList,
        filters: undefined,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetchSensors: (filters = undefined) => {
            dispatch(fetchSensors(filters))
        },
        sensorSelected: (selected) => {
            dispatch(sensorSelected(selected))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SensorsList);
