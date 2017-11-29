import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    createProcessingDetail,
    checkProcessingDetailName,
    checkProcessingDetailIdentifier,
    setProcessingDetailName,
    setProcessingDetailIdentifier,
    setProcessingDetailDescription
} from './processingDetailFormAction';

import ProcessingDetailFormComponent from './processingDetailFormComponent';

class ProcessingDetailForm extends Component {
    render() {
        return(
            <ProcessingDetailFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        processingdetailform: state.processingdetailform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        createProcessingDetail: (data) => {
            dispatch(createProcessingDetail(data))
        },
        checkProcessingDetailName: (text) => {
            dispatch(checkProcessingDetailName(text))
        },
        checkProcessingDetailIdentifier: (text) => {
            dispatch(checkProcessingDetailIdentifier(text))
        },
        setProcessingDetailName: (text) => {
            dispatch(setProcessingDetailName(text))
        },
        setProcessingDetailIdentifier: (text) => {
            dispatch(setProcessingDetailIdentifier(text))
        },
        setProcessingDetailDescription: (text) => {
            dispatch(setProcessingDetailDescription(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcessingDetailForm);
