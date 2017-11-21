import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetch_sensors
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
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sensors);
