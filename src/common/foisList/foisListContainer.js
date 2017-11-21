import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetchFois,
    foiSelected
} from './foisListAction';

import FoisListComponent from './foisListComponent';

class FoisList extends Component {

    componentDidMount() {
        const {
            fetchFois
        } = this.props;
        fetchFois();
    }

    render() {
        return(
            <FoisListComponent
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
        fetchFois: () => {
            dispatch(fetchFois());
        },
        foiSelected: (identifier) => {
            dispatch(foiSelected(identifier));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FoisList));
