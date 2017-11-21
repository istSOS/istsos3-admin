import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/*
import {
    foisMapUpdatePointOk
} from './foisMapAction';*/

/*
Moving the location of a coordinate shal be made like this:
https://jsfiddle.net/xvz86tf7/

Keeping the current vertex in the center of the screen
*/

import {
    geometryAdded,
    geometryChanged,
} from './foisMapAction';

import FoisMapComponent from './foisMapComponent';

class FoisMap extends Component {

    render() {
        return(
            <FoisMapComponent
                {...this.props}/>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        foismap: state.foismap,
        fois: state.fois,
        ...ownProps
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        geometryAdded: (type, geom) => {
            dispatch(geometryAdded(type, geom));
        },
        geometryChanged: (type, geom) => {
            dispatch(geometryChanged(type, geom));
        }
    }
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(FoisMap));
