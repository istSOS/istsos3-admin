import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FoisMapComponent from './foisMapComponent';

class FoisMap extends Component {

    render() {
        return(
            <FoisMapComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        fois: state.fois
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_fois: () => {
            console.log("fetch_fois...");
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FoisMap));
