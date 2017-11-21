import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetch_materials,
    materialSelected
} from './materialsAction';

import MaterialDropdown from './materialsDropdown';
import MaterialCards from './materialsCards';

class Material extends Component {
    render() {
        const {
            layout
        } = this.props;
        if (layout==="dropdown"){
            return(
                <MaterialDropdown
                    {...this.props}/>
            );
        }else if(layout==="cards"){
            return(
                <MaterialCards
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        materials: state.materials,
        layout: 'dropdown',
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_materials: () => {
            dispatch(fetch_materials());
        },
        materialSelected: (selected) => {
            dispatch(materialSelected(selected));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Material));
