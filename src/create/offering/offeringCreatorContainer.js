import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import OfferingCreatorComponent from './offeringCreatorComponent';

class OfferingCreator extends Component {

    render() {
        return(
            <OfferingCreatorComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        offering: state.offering
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        saveOffering: () => {
            console.log("Saving offering..");
        },
        deleteOffering: () => {
            console.log("Deleting offering..");
        },
        updateOffering: () => {
            console.log("Updating offering..");
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferingCreator));
