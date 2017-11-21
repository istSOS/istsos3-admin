import React, { Component } from 'react';
import { connect } from 'react-redux';

// istSOS components
import SpecimenFormComponent from './specimenFormComponent';

// Semantic UI components
import {
    setMaterial,
    setSpecimenName,
    setSpecimenIdentifier,
    checkSpecimenIdentifier,
    setSpecimenDescription,
    setSpecimenSampligDate,
    setSpecimenSampligTime,
    setSpecimenSizeValue,
    setSpecimenSizeUom,
    setSpecimenSampledFeature,
    setSpecimenSamplingMethod,
    setSpecimenSamplingLocation,
    setSpecimenCurrentLocation,
    setSpecimenSpecimenType,
    loadSpecimen
} from './specimenFormAction';

class SpecimenForm extends Component {
    componentDidMount() {
        const {
            template,
            loadSpecimen,
            checkSpecimenIdentifier
        } = this.props;
        if(template!==undefined){
            loadSpecimen(template);
            checkSpecimenIdentifier(template.identifier);
        }
    }
    render() {
        return(
            <SpecimenFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        specimenform: state.specimenform,
        hidden: [],
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        loadSpecimen: (specimen) => {
            dispatch(loadSpecimen(specimen))
        },
        setMaterial: (material) => {
            dispatch(setMaterial(material))
        },
        setSpecimenIdentifier: (text) => {
            dispatch(setSpecimenIdentifier(text));
        },
        checkSpecimenIdentifier: (text) => {
            dispatch(checkSpecimenIdentifier(text));
        },
        setSpecimenName: (text) => {
            dispatch(setSpecimenName(text));
        },
        setSpecimenDescription: (text) => {
            dispatch(setSpecimenDescription(text));
        },
        setSpecimenSampligDate: (text) => {
            dispatch(setSpecimenSampligDate(text));
        },
        setSpecimenSampligTime: (text) => {
            dispatch(setSpecimenSampligTime(text));
        },
        setSpecimenSizeValue: (text) => {
            dispatch(setSpecimenSizeValue(text));
        },
        setSpecimenSizeUom: (text) => {
            dispatch(setSpecimenSizeUom(text));
        },
        setSpecimenSamplingLocation: (text) => {
            dispatch(setSpecimenSamplingLocation(text));
        },
        setSpecimenCurrentLocation: (text) => {
            dispatch(setSpecimenCurrentLocation(text));
        },
        setSpecimenSpecimenType: (text) => {
            dispatch(setSpecimenSpecimenType(text));
        },
        setSpecimenSampledFeature: (text) => {
            dispatch(setSpecimenSampledFeature(text));
        },
        setSpecimenSamplingMethod: (text) => {
            dispatch(setSpecimenSamplingMethod(text));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecimenForm);
