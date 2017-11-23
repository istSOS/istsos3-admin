import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
    fetchHumans,
    openDialog
} from './humansAction';

import HumanDropdown from './humansDropdown';

class Humans extends Component {

    componentDidMount() {
        const {
            fetchHumans
        } = this.props;
        fetchHumans();
    }

    render() {
        const {
            layout
        } = this.props;
        if (layout==="dropdown"){
            return(
                <HumanDropdown
                    {...this.props}/>
            );
        }else if(layout==="cards"){
            return(
                <HumanDropdown
                    {...this.props}/>
            );
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        humans: state.humans,
        layout: 'dropdown',
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetchHumans: () => {
            dispatch(fetchHumans());
        },
        openDialog: (open) => {
            dispatch(openDialog(open));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Humans));
