import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    setSpecimenWizardPage,
    nextWizardPage
} from './specimenAction';

import {
    createSpecimen
} from '../../../actions/creators';

import SpecimenComponent from './specimenComponent';

class Specimen extends Component {

    render() {
        return(
            <SpecimenComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        insertspecimen: state.insertspecimen,
        sensorsList: state.sensorsList,
        specimenform: state.specimenform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        setSpecimenWizardPage: (page) => {
            dispatch(setSpecimenWizardPage(page));
        },
        nextWizardPage: () => {
            dispatch(nextWizardPage());
        },
        createSpecimen: (entity) => {
            dispatch(createSpecimen(entity));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Specimen));
