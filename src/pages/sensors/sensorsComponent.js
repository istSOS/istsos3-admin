import React, { Component } from 'react';

// Semantic UI components
import {
    Card,
    Form,
    Icon,
    Grid
} from 'semantic-ui-react'



class SensorsComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {sensors} = this.props;
        console.log(sensors);
        return (
            <div style={{padding: '1em'}}>
                <Grid columns={3}>
                    <Grid.Column width={4}>
                        <Form>
                            <Form.Input
                                icon={<Icon name='search'
                                inverted circular link />}
                                placeholder='Search' />
                            <Form.Input
                                icon={<Icon name='calendar'
                                inverted circular link />}
                                placeholder='From date' />
                            <Form.Input
                                icon={<Icon name='calendar'
                                inverted circular link />}
                                placeholder='To date' />
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        {
                           sensors.isFetching ?
                           <div>Loading...</div>:
                           sensors.data.map((sensor, key) => (
                               <Card fluid
                                   key={'sns-row-'+sensor.id}>
                                   <Card.Content>
                                       <Card.Header>
                                         {sensor.offering}
                                       </Card.Header>
                                       <Card.Meta>
                                         {sensor.sampled_foi}
                                       </Card.Meta>
                                       <Card.Description>
                                         Steve wants to add you to the group <strong>best friends</strong>
                                       </Card.Description>
                                   </Card.Content>
                               </Card>
                           ))
                        }
                    </Grid.Column>
                    <Grid.Column width={6}>
                        map
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
};

export default SensorsComponent;
