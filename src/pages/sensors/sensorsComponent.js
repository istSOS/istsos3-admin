import React, { Component } from 'react';

// istSOS components
import {
    ObservableProperties
} from '../../common';
import FoisMap from '../../common/foisMap/foisMapContainer';

import DateRange from '../../common/dateRange';

// Semantic UI components
import {
    Form,
    Rating,
    //Icon,
    //Popup,
    Grid,
    Button,
    Segment,
    Header,
    Divider,
    Table
} from 'semantic-ui-react'

// Date picker
// import moment from 'moment';


class SensorsComponent extends Component {


    render() {
        const {
            sensors,
            applyObsPropFilter,
            updateDateRange,
            fetch_sensors
        } = this.props;
        let sensorsCnt = Object.keys(sensors.data).length;
        return (
            <div style={{padding: '1em'}}>
                <Grid columns={3}>
                    <Grid.Column width={4}>
                        <Header sub attached='top'>
                            Search for sensors
                        </Header>
                        <Segment attached>
                            <Form>
                                <ObservableProperties
                                    layout="dropdown"
                                    onSelected={applyObsPropFilter}/>
                                <DateRange
                                    onRangeSelected={updateDateRange}/>
                                <Button fluid
                                    onClick={(e)=>{
                                        fetch_sensors(sensors.filter)
                                    }}>Search</Button>
                            </Form>
                        </Segment>
                        </Grid.Column>
                        <Grid.Column width={6}>
                        {
                            sensors.isFetching ?
                            <div>Loading...</div>:
                            <div>
                                <Header sub attached='top'>
                                    {
                                        sensorsCnt === 0?
                                        "Sensors not found":
                                        sensorsCnt === 1?
                                            "1 sensor found":
                                            sensorsCnt + " sensors found"
                                    }
                                </Header>
                                <Segment attached>

                                {/*<Grid divided='vertically'>*/}
                                {sensors.data.map((sensor, key) => (
                                    <div key={'sns-row-'+sensor.id}>
                                        <div style={{
                                                fontSize: '1.5em',
                                                fontWeight: 'bold',
                                                textTrasform: 'uppercase',
                                                marginBottom: '0.8em'
                                            }}>
                                            <Rating /> {sensor.name}
                                        </div>
                                        <div style={{
                                                marginBottom: '0.8em'
                                            }}>
                                            {sensor.sampled_foi}
                                        </div>
                                        <Table celled size="small">
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>
                                                        Observed property
                                                    </Table.HeaderCell>
                                                    <Table.HeaderCell>
                                                        Unit of measure
                                                    </Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>
                                            <Table.Body>
                                            {sensor.observable_properties.map((op, key) => (
                                                <Table.Row key={"sns-row-op-"+op.id}>
                                                    <Table.Cell>
                                                        {op.name}
                                                    </Table.Cell>
                                                    <Table.Cell>
                                                        {op.uom}
                                                    </Table.Cell>
                                                </Table.Row>
                                            ))}
                                            </Table.Body>
                                        </Table>
                                        <Divider/>
                                    </div>
                                    /*<Grid.Row columns={2} key={'sns-row-'+sensor.id}>
                                        <Grid.Column>
                                            <div style={{
                                                    fontSize: '1.2em',
                                                    fontWeight: 'bold',
                                                    marginBottom: '0.8em'
                                                }}>
                                                <Rating /> {sensor.name}
                                            </div>
                                            <div style={{
                                                    marginBottom: '0.8em'
                                                }}>
                                                {sensor.sampled_foi}
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Table celled>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell>
                                                            Observed property
                                                        </Table.HeaderCell>
                                                        <Table.HeaderCell>
                                                            Unit of measure
                                                        </Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                {sensor.observable_properties.map((op, key) => (
                                                    <Table.Row key={"sns-row-op-"+op.id}>
                                                        <Table.Cell>
                                                            {op.name}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {op.uom}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                ))}
                                                </Table.Body>
                                            </Table>
                                        </Grid.Column>
                                    </Grid.Row>*/
                                ))}
                                {/*</Grid>*/}
                                </Segment>

                            </div>
                        }
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <FoisMap style={{height: '50%'}}/>
                        </Grid.Column>
                    </Grid>
                </div>
            )
        }
    };

    export default SensorsComponent;
