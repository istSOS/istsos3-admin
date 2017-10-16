import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import HeaderComponent from './headerComponent';

class Header extends Component {

    render() {
        const {page, setPage} = this.props;
        return(
            <HeaderComponent
                page = {page}
                setPage = {setPage}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        page: "home"
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        setPage: (page = undefined) => {
            console.log("Setting page: " + page);
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header));
