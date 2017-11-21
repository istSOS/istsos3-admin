import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    foiEdit,
    foiEditToggle
} from './foisAction';

import FoisComponent from './foisComponent';

class Fois extends Component {
    render() {
        return(
            <FoisComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        foisstate: state.foisstate,
        foiform: state.foiform,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        foiEdit: (editor) => {
            dispatch(foiEdit(editor));
        },
        foiEditToggle: () => {
            dispatch(foiEditToggle());
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Fois));
