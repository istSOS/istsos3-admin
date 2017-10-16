import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './pages/header/headerContainer';
import Fois from './pages/fois/foisContainer';
import OfferingsPageContainer from './offerings/offeringsPageContainer';

// Creators
import CreatorsPageComponent from './create/creatorsPageComponent';
import InsertSensorContainer from './create/sensor/insertSensorContainer';
import OfferingCreator from './create/offering/offeringCreatorContainer';
import SpecimenCreatorComponent from './create/specimen/specimenCreatorComponent';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        body: () => <h2>Home</h2>
    },
    {
        path: '/sensors',
        sidebar: () => <div>bubblegum!</div>,
        body: OfferingsPageContainer
    },
    {
        path: '/fois',
        sidebar: () => <div>shoelaces!</div>,
        body: Fois
    },
    {
        path: '/create',
        exact: true,
        sidebar: () => <div>shoelaces!</div>,
        body: CreatorsPageComponent
    },
    {
        path: '/create/sensor',
        sidebar: () => <div>shoelaces!</div>,
        body: InsertSensorContainer
    },
    {
        path: '/create/specimen',
        sidebar: () => <div>shoelaces!</div>,
        body: SpecimenCreatorComponent
    },
    {
        path: '/create/offering',
        sidebar: () => <div>shoelaces!</div>,
        body: OfferingCreator
    }
]

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div style={{ flex: 1, padding: '10px' }}>
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

export default App;
