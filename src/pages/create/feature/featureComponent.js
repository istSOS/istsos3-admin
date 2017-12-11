import React, { Component } from 'react';
import {
  Route,
  withRouter
} from 'react-router-dom';

// istSOS components
import {
    FoisMap,
    FoiForm
} from '../../../common';

// Semantic UI components
import {
    Grid,
    Header,
    Button,
    Card
} from 'semantic-ui-react';

class FeatureWizardComponent extends Component {

    constructor(props) {
        super(props);
        const {
            foiform,
            location,
            history
        } = this.props;
        if(!foiform.valid && location.pathname !== '/create/featureofinterest'){
            history.replace(
                '/create/featureofinterest'
            );
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {
            foiform,
            location,
            history
        } = nextProps;
        if(!foiform.valid && location.pathname !== '/create/featureofinterest'){
            history.replace(
                '/create/featureofinterest'
            );
            return false;
        }
        return true;
    }

    render() {
        const {
            history,
            featureWizard,
            foiform,
            create_feature_of_interest
        } = this.props;
        if (featureWizard.saved){
            return (
                <Grid centered columns={3}>
                    <Grid.Column>
                        <Header as='h3'>
                            Feature of interest registered
                            successfully
                        </Header>
                        <div>
                            <Button
                                primary
                                content='Add another feature of intereset'
                                onClick={(e) => {
                                    history.push(
                                        '/create/featureofinterest'
                                    );
                                }}/>
                        </div>
                    </Grid.Column>
                </Grid>
            );
        }else{
            return (
                <Grid columns='equal'>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column>
                        <Route
                            path='/create/featureofinterest'
                            exact={true}
                            render={(routeProps) => (
                                <div>
                                    <Header as='h3'>Feature of Interest metadata</Header>
                                    <FoiForm
                                        hideButton={true}
                                        hide={{
                                            coordinates: true
                                        }}/>
                                </div>
                            )}/>
                        <Route
                            path='/create/featureofinterest/geometry'
                            exact={true}
                            render={(routeProps) => (
                                <div>
                                    <Header as='h3'>Define the geometry</Header>
                                    <FoiForm
                                        hideButton={true}
                                        hide={{
                                            name: true,
                                            identifier: true,
                                            description: true,
                                            type: true
                                        }}/>
                                    <FoisMap
                                        sensorType={{
                                            foiType: foiform.type
                                        }}
                                        edit={foiform.shape}/>
                                </div>
                            )}/>
                        <Route
                            path='/create/featureofinterest/checkout'
                            exact={true}
                            render={(routeProps) => (
                                <div>
                                    <Header as='h3'>
                                        {
                                            featureWizard.saving === true ?
                                            "salvataggio in corso": null
                                        }
                                    </Header>
                                </div>
                            )}/>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Card>
                            <Route
                                path='/create/featureofinterest'
                                exact={true}
                                render={() => ([
                                    <Card.Content
                                        key={'fwcsc-1'}>
                                        <Card.Header>
                                            New Feature of Interest
                                        </Card.Header>
                                        <Card.Description>
                                            Fill the fields to define
                                            this new Feature of Interest
                                        </Card.Description>
                                    </Card.Content>,
                                    <Card.Content extra
                                        key={'fwcsx-1'}>
                                        <div className='ui two buttons'>
                                            <Button
                                                primary={foiform.valid}
                                                disabled={!foiform.valid}
                                                content='Continue'
                                                onClick={(e) => {
                                                    history.push(
                                                        '/create/featureofinterest/geometry'
                                                    );
                                                }}/>
                                        </div>
                                    </Card.Content>
                                ])}/>
                            <Route
                                path='/create/featureofinterest/geometry'
                                exact={true}
                                render={() => ([
                                    <Card.Content
                                        key={'fwcsc-2'}>
                                        <Card.Header>
                                            Set geometry
                                        </Card.Header>
                                        <Card.Description>
                                            Fill the fields to define
                                            this new Feature of Interest
                                        </Card.Description>
                                    </Card.Content>,
                                    <Card.Content extra
                                        key={'fwcsx-2'}>
                                        <div className='ui two buttons'>
                                            <Button
                                                primary
                                                loading={foiform.saving}
                                                content='Checkout'
                                                onClick={(e) => {
                                                    create_feature_of_interest(foiform);
                                                }}/>
                                        </div>
                                    </Card.Content>
                                ])}/>
                        </Card>
                    </Grid.Column>
                </Grid>
            )
        }
    }
};

export default withRouter(FeatureWizardComponent);
