import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetch_sensors,

    // Filtering actions
    applyObsPropFilter,
    resetDateRange,
    updateDateRange,
    addOffering,
    removeOffering
} from './sensorsAction';

import SensorsComponent from './sensorsComponent';

class Sensors extends Component {

    componentDidMount() {
        const { fetch_sensors } = this.props;
        fetch_sensors();
        console.log("componentDidMount");
    }

    render() {
        return(
            <SensorsComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        sensors: state.sensors,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_sensors: (filters = undefined) => {
            dispatch(fetch_sensors(filters));
        },
        applyObsPropFilter: (filters) => {
            dispatch(applyObsPropFilter(filters));
        },
        resetDateRange: () => {
            dispatch(resetDateRange());
        },
        updateDateRange: (data) => {
            dispatch(updateDateRange(data));
        },
        addOffering: (offering) => {
            dispatch(addOffering(offering));
        },
        removeOffering: (index) => {
            dispatch(removeOffering(index));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sensors);
