import React, { Component } from 'react';
import { connect } from 'react-redux';

// istSOS components
import HumanFormComponent from './humanFormComponent';

import {
    createHuman,
    setHumanUsername,
    checkHumanUsername,
    setHumanFirstname,
    setHumanMiddlename,
    setHumanLastname,
    setHumanOrganization,
    setHumanPositon,
    setHumanRole
    /*setUomName,
    setUomDescription,
    checkUomName*/
} from './humanFormAction';

class HumanForm extends Component {
    render() {
        return(
            <HumanFormComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        humanform: state.humanform
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        createHuman: (data) => {
            dispatch(createHuman(data))
        },
        setHumanUsername: (text) => {
            dispatch(setHumanUsername(text))
        },
        checkHumanUsername: (text) => {
            dispatch(checkHumanUsername(text))
        },
        setHumanFirstname: (text) => {
            dispatch(setHumanFirstname(text))
        },
        setHumanMiddlename: (text) => {
            dispatch(setHumanMiddlename(text))
        },
        setHumanLastname: (text) => {
            dispatch(setHumanLastname(text))
        },
        setHumanOrganization: (text) => {
            dispatch(setHumanOrganization(text))
        },
        setHumanPositon: (text) => {
            dispatch(setHumanPositon(text))
        },
        setHumanRole: (text) => {
            dispatch(setHumanRole(text))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HumanForm);
