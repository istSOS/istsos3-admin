import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    foiSamplingSelected,
    foiNameChanged,
    checkFoiName,
    foiIdentifierChanged,
    checkFoiIdentifier,
    foiDescriptionChanged,
    //foiGeometryAdded,
    //foiGeometryChanged,
    foiPointXChanged,
    foiPointYChanged,
    foiPointZChanged,
    create_foi
} from './foiFormAction';

import FoiFormComponent from './foiFormComponent';

class FoiForm extends Component {

    render() {
        return(
            <FoiFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        foiform: state.foiform,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        create_foi: (foi) => {
            dispatch(create_foi(foi));
        },
        foiSamplingSelected: (samplingType) => {
            dispatch(foiSamplingSelected(samplingType.definition));
        },
        foiNameChanged: (name) => {
            dispatch(foiNameChanged(name));
        },
        checkFoiName: (name) => {
            dispatch(checkFoiName(name));
        },
        foiIdentifierChanged: (identifier) => {
            dispatch(foiIdentifierChanged(identifier));
        },
        checkFoiIdentifier: (identifier) => {
            dispatch(checkFoiIdentifier(identifier));
        },
        foiDescriptionChanged: (description) => {
            dispatch(foiDescriptionChanged(description));
        },
        /*foiGeometryAdded: (type, geom) => {
            dispatch(foiGeometryAdded(type, geom));
        },
        foiGeometryChanged: (type, geom) => {
            dispatch(foiGeometryChanged(type, geom));
        },*/
        foiPointXChanged: (x) => {
            dispatch(foiPointXChanged(x));
        },
        foiPointYChanged: (y) => {
            dispatch(foiPointYChanged(y));
        },
        foiPointZChanged: (z) => {
            dispatch(foiPointZChanged(z));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FoiForm));
