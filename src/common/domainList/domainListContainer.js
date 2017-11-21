import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetchDomains
} from './domainListAction';

import DomainListComponent from './domainListComponent';

class DomainList extends Component {

    componentDidMount() {
        const {
            fetchDomains
        } = this.props;
        fetchDomains();
    }

    render() {
        return(
            <DomainListComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        domains: state.domains
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetchDomains: () => {
            dispatch(fetchDomains());
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DomainList));
