import React, { Component } from 'react';

// istSOS components
import {
    ObservableProperties
} from '../../common';
import FoisMap from '../../common/foisMap/foisMapContainer';
import SensorsBasket from './sensorsBasket';
import SensorsSearchResult from './sensorsSearchResult';

import DateRange from '../../common/dateRange';

import {TestPlugin} from 'istsos3-viewer';

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
            fetch_sensors,
            addOffering,
            removeOffering
        } = this.props;
        let sensorsCnt = Object.keys(sensors.data).length;
        return(
            <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    overflow: 'hidden',
                    padding: '1px'
                }}>
                <div style={{
                        padding: '1px 1rem'
                    }}>
                        <Button circular secondary icon='find' />
                        <br/>
                        <br/>
                        <Button circular secondary icon='area chart' />
                        <br/>
                        <br/>
                        <Button circular secondary icon='map' />
                </div>
                <div style={{
                        padding: '1px'
                    }}>
                    <Header sub attached='top'>
                        Search
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
                    <TestPlugin/>
                    <SensorsBasket
                        sensors={sensors}
                        removeOffering={removeOffering}/>
                </div>
                <div style={{
                        flex: 1,
                        padding: '1px 1rem'
                    }}>
                    <SensorsSearchResult
                        sensors={sensors}
                        addOffering={addOffering}/>
                </div>
                <div style={{
                        flex: 1,
                        padding: '0px'
                    }}>
                    <FoisMap style={{height: '100%'}}/>
                </div>
            </div>
        )

        /*return (
            <div style={{padding: '1em'}}>
                <Grid columns={3}>
                    <Grid.Column width={4}>
                        <Header sub attached='top'>
                            Search
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
                        {sensors.selected.map((sensor, key) => (
                            <div key={'snsel-row-'+sensor.id}>
                                {sensor.name}
                            </div>
                        ))}
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

                                {sensors.data.map((sensor, key) => (
                                    <div key={'snsrc-row-'+sensor.id}>
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
                                            {sensor.sampled_foi.identifier}
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
                                        <Button
                                            onClick={(e) => {
                                                addOffering(sensor)
                                            }}>Add</Button>
                                        <Divider section/>
                                    </div>
                                ))}
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
            */
        }
    };

    export default SensorsComponent;
