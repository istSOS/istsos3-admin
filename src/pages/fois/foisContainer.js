import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_fois
} from './foisAction';

import FoisComponent from './foisComponent';

class Fois extends Component {

    /*componentDidMount() {
        const {
            dispatch
        } = this.props;
        dispatch(fetch_fois());
    }*/

    render() {
        return(
            <FoisComponent
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
            dispatch(fetch_fois());
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Fois));
