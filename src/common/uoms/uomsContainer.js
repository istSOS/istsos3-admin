import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_uoms,
    uomSelected,
    openDialog
} from './uomsAction'

import UomsComponent from './uomsComponent';

class Uoms extends Component {

    componentDidMount() {
        const {
            dispatch
        } = this.props;
        dispatch(fetch_uoms());
    }

    render() {
        return(
            <UomsComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        uoms: state.uoms
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_uoms: () => {
            dispatch(fetch_uoms());
        },
        uomSelected: (selected) => {
            dispatch(uomSelected(selected));
        },
        openDialog: (open) => {
            dispatch(openDialog(open));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Uoms));
