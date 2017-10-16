import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_offerings
} from './offeringsAction';

import OfferingsSearchComponent from './offeringsSearchComponent';
import OfferingsListComponent from './offeringsListComponent';


class OfferingsPageContainer extends Component {

    componentDidMount() {
        const { fetch_offerings} = this.props;
        fetch_offerings();
    }

    render() {
        const { offerings } = this.props;
        return(
            <div>
                <OfferingsSearchComponent/>
                <OfferingsListComponent
                    offerings = { offerings }/>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        offerings: state.offerings
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_offerings: (filters = undefined) => {
            console.log("fetch_offerings: " + filters);
            dispatch(fetch_offerings(filters))
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferingsPageContainer));
