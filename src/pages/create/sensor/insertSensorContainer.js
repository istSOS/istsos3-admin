import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


// import {
//     foiSamplingForced
// } from '../../../common/foiForm/foiFormAction';

// import {
//     skipSpecimentPage,
//     //selectFoi
// } from './insertSensorAction';

import {
    registerSensor
} from 'istsos3-core';

import InsertSensorComponent from './insertSensorComponent';

class InsertSensorContainer extends Component {
    render() {
        return(
            <InsertSensorComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        insertsensor: state.web_insertsensor,
        fois: state.core_fois,
        map: state.core_map,
        foiform: state.foiform,
        foisstate: state.foisstate,
        observableproperties: state.observableproperties,
        sensorform: state.sensorform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        registerSensor: (insertsensor) => {
            dispatch(registerSensor(insertsensor));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(InsertSensorContainer));
