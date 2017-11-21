import React, { Component } from 'react';

// Semantic UI components
import {
    Grid,
    Card,
    Segment,
    Label,
    Header
} from 'semantic-ui-react';

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Row columns={6}>
                        <Grid.Column>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>
                                        Registered sensors
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>
                                          Joined in 2015
                                        </span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                  ciao
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment textAlign='center'>
                                <Label
                                    circular
                                    size="massive"
                                    color="blue">{"232'431"}</Label>
                                <Header as='h2'>
                                    Sensors
                                </Header>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            3
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
};

export default HomeComponent;
