import React, { Component } from 'react';

import {
    //DomainList,
    FoisMap,
    FoiForm,
    FoisList
} from '../../../common';

// Semantic UI components
import {
    Grid,
    Header,
    Button,
    Container
} from 'semantic-ui-react'

class FoisComponent extends Component {

    getCreated = () => {
        const {
            foiform
        } = this.props;
        console.log(foiform);
    }

    render() {
        const {
            foisstate,
            foiform,
            foiGeometryAdded,
            foiGeometryChanged,
            foiEdit,
            onSelected,
            hideButton
        } = this.props;
        return (
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Container text textAlign='center' fluid>
                            <Header as='h2' icon>
                                <Header.Content>
                                    Feature of Interest
                                </Header.Content>
                            </Header>
                            <p>
                                Assign a feature of interest Praesent sapien
                                massa, convallis a pellentesque nec, egestas non nisi.
                                Sed porttitor lectus nibh.
                            </p>
                            <Button.Group>
                                <Button
                                    positive={!foisstate.editing}
                                    onClick={e => {
                                        foiEdit(false);
                                    }}>Select existing</Button>
                                <Button.Or />
                                <Button
                                    positive={foisstate.editing}
                                    onClick={e => {
                                        foiEdit(true);
                                    }}>Create new</Button>
                            </Button.Group>
                        </Container>
                        {
                            foisstate.editing?
                            <FoiForm
                                hideButton={hideButton}/>:
                            <FoisList
                                onSelected={onSelected}/>
                        }
                    </Grid.Column>
                    <Grid.Column>
                        <FoisMap
                            geometryAdded={foiGeometryAdded}
                            geometryChanged={foiGeometryChanged}
                            sensorType={{
                                foiType: foiform.type
                            }}
                            edit={{
                                point: foiform.point
                            }}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
};

export default FoisComponent;
