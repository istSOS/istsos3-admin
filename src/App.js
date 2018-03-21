import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
    fetch_materials
} from './common/materials/materialsAction';

import Header from './pages/header/headerContainer';
import HomeComponent from './pages/home/homeComponent';
//import {default as FoisCreator} from './pages/create/fois/foisContainer';
import FeatureWizard from './pages/create/feature/featureContainer';
//import Sensors from './pages/sensors/sensorsContainer';

// Viewer
//import FoisList from './common/foisList/foisListContainer';
import Fois from './pages/fois/foisContainer';

// Creators
import InsertSensorContainer from './pages/create/sensor/insertSensorContainer';
import OfferingCreator from './create/offering/offeringCreatorContainer';
import Specimen from './pages/create/specimen/specimenContainer';

// Inject reducers
import {
    store,
    injectReducer
} from 'istsos3-core';

// istSOS Plugins
import {
    Viewer,
    reducers
} from 'istsos3-viewer';

import {
    reducers as ui_reducer
} from 'istsos3-ui';

injectReducer(store, reducers);
injectReducer(store, ui_reducer);

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        body: HomeComponent
    },
    {
        path: '/sensors',
        sidebar: () => <div>bubblegum!</div>,
        body: Viewer
    },
    {
        path: '/fois',
        sidebar: () => <div>shoelaces!</div>,
        body: Fois
    },
    {
        path: '/create/sensor',
        sidebar: () => <div>shoelaces!</div>,
        body: InsertSensorContainer
    },
    {
        path: '/create/featureofinterest',
        sidebar: () => <div>shoelaces!</div>,
        body: FeatureWizard,
        //body: FoisCreator
    },
    {
        path: '/create/specimen',
        sidebar: () => <div>shoelaces!</div>,
        body: Specimen
    },
    {
        path: '/create/offering',
        sidebar: () => <div>shoelaces!</div>,
        body: OfferingCreator
    }
]

class App extends Component {

    componentDidMount() {
        const {
            fetch_materials
        } = this.props;
        fetch_materials();
    }

    render() {
        return (
            <Router>
                <div style={{
                        'overflow': 'hidden',
                        'height': '100%',
                        'display': 'flex',
                        'flex': 1,
                        'flexDirection': 'column'
                    }}>
                    <Header/>
                    <div id="appBody" style={{
                            /*flexGrow: 1,
                            padding: '1em',
                            width: "100%",
                            overflow: "auto"*/
                            overflow: 'hidden',
                            height: '100%',
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column'
                        }}>
                        <Switch>
                            {
                                routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        component={route.body}
                                    />))
                            }
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch: dispatch,
        fetch_materials: () => {
            dispatch(fetch_materials());
        }
    }
};

export default connect(
    null, mapDispatchToProps
)(App);
