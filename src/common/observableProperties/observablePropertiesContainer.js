import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_observable_properties,
    observablePropertySelected,
    openDialog
} from './observablePropertiesAction'

import ObservablePropertiesComponent from './observablePropertiesComponent';
import ObservablePropertiesDropdown from './observablePropertiesDropdown';

class ObservableProperties extends Component {

    componentDidMount() {
        const {
            dispatch
        } = this.props;
        dispatch(fetch_observable_properties());
    }

    render() {
        const {
            layout
        } = this.props;
        if (layout==="select"){
            return(
                <ObservablePropertiesComponent
                    {...this.props}/>
            );
        }else if(layout==="dropdown"){
            return(
                <ObservablePropertiesDropdown
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        observableproperties: state.observableproperties,
        layout: 'select',
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_observable_properties: () => {
            console.log("fetch_observable_properties...");
        },
        observablePropertySelected: (selected) => {
            dispatch(observablePropertySelected(selected))
        },
        openDialog: (open) => {
            dispatch(openDialog(open))
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ObservableProperties));
