import React, { Component } from 'react';
import { connect } from 'react-redux';

// istSOS components
import UomFormComponent from './uomFormComponent';

import {
    createUom,
    setUomName,
    setUomDescription,
    checkUomName
} from './uomFormAction';

class UomForm extends Component {
    render() {
        return(
            <UomFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        uomform: state.uomform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        createUom: (data) => {
            dispatch(createUom(data))
        },
        checkUomName: (name) => {
            dispatch(checkUomName(name))
        },
        setUomName: (text) => {
            dispatch(setUomName(text))
        },
        setUomDescription: (text) => {
            dispatch(setUomDescription(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UomForm);
