import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetchProcessingDetails
} from './processingDetailsAction';

import ProcessingDetailsDropdown from './processingDetailsDropdown';

class ProcessingDetails extends Component {

    componentDidMount() {
        const {
            fetchProcessingDetails
        } = this.props;
        fetchProcessingDetails();
    }

    render() {
        const {
            layout
        } = this.props;
        if (layout==="dropdown"){
            return(
                <ProcessingDetailsDropdown
                    {...this.props}/>
            );
        }else if(layout==="cards"){
            return(
                <ProcessingDetailsDropdown
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        processingdetails: state.processingdetails,
        layout: 'dropdown',
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetchProcessingDetails: () => {
            dispatch(fetchProcessingDetails());
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProcessingDetails));
