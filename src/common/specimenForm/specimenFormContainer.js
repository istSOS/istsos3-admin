import React, { Component } from 'react';
import { connect } from 'react-redux';

// istSOS components
import SpecimenFormMetadata from './specimenFormMetadata';
import SpecimenFormProcessing from './specimenFormProcessing';

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
    loadSpecimen,
    setOperator,
    setProcessingDetails,
    setSpecimenProcessingDetailsDate,
    setSpecimenProcessingDetailsTime,
    addProcessingDetails,
    removeProcessingDetails,
    setHidden
} from './specimenFormAction';

class SpecimenForm extends Component {
    componentDidMount() {
        const {
            template,
            loadSpecimen,
            checkSpecimenIdentifier,
            hidden,
            setHidden
        } = this.props;
        setHidden(hidden);
        if(template!==undefined){
            loadSpecimen(template);
            checkSpecimenIdentifier(template.identifier);
        }
    }
    render() {
        const {
            layout
        } = this.props;
        if (layout==="metadata"){
            return(
                <SpecimenFormMetadata
                    {...this.props}/>
            );
        }else if(layout==="processing"){
            return(
                <SpecimenFormProcessing
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        specimenform: state.specimenform,
        hidden: [],
        layout: 'metadata',
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        loadSpecimen: (specimen) => {
            dispatch(loadSpecimen(specimen))
        },
        setHidden: (hidden) => {
            dispatch(setHidden(hidden))
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
        },
        // processing details actions
        setOperator: (operator) => {
            dispatch(setOperator(operator));
        },
        setProcessingDetails: (details) => {
            dispatch(setProcessingDetails(details));
        },
        setSpecimenProcessingDetailsDate: (text) => {
            dispatch(setSpecimenProcessingDetailsDate(text));
        },
        setSpecimenProcessingDetailsTime: (text) => {
            dispatch(setSpecimenProcessingDetailsTime(text));
        },
        addProcessingDetails: () => {
            dispatch(addProcessingDetails());
        },
        removeProcessingDetails: (index) => {
            dispatch(removeProcessingDetails(index));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SpecimenForm);
