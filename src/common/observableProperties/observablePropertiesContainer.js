import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_observable_properties
} from './observablePropertiesAction'

import ObservablePropertiesComponent from './observablePropertiesComponent';

class ObservableProperties extends Component {

    componentDidMount() {
        const {
            dispatch
        } = this.props;
        dispatch(fetch_observable_properties());
    }

    render() {
        return(
            <ObservablePropertiesComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        observableproperties: state.observableproperties
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_observable_properties: () => {
            console.log("fetch_observable_properties...");
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ObservableProperties));
