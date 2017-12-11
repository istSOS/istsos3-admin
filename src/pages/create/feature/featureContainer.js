import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    foiform2entity
} from '../../../common/foiForm/foiFormAction';

import {
    create_foi
} from '../../../actions';

import FeatureWizardComponent from './featureComponent';

class FeatureWizard extends Component {
    render() {
        return(
            <FeatureWizardComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        featureWizard: state.featureWizard,
        foiform: state.foiform,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        create_feature_of_interest: (data) => {
            try{
                let entity = foiform2entity(data);
                dispatch(
                    create_foi(
                        entity,
                        function(dispatch, json){
                            if (json.success === true){
                                dispatch({
                                    type: "FOI_WIZARD_FINISH"
                                })
                                dispatch({
                                    type: "FOI_FORM_RESET"
                                })
                            }else{
                                dispatch({
                                    type: "FOI_WIZARD_ERROR",
                                    msg: json.message
                                })
                            }
                        }
                    )
                );
            }catch(e){
                dispatch({
                    type: "CREATE_FOI_FINISHED",
                    msg: e.toString()
                });
            }
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatureWizard));
