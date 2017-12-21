import React, { Component } from 'react';

// Semantic UI components
import {
    Form,
    Rating,
    Icon,
    //Popup,
    Grid,
    Button,
    Segment,
    Header,
    Divider,
    Table
} from 'semantic-ui-react'

class SensorsBasket extends Component {
    render() {
        const {
            sensors,
            addOffering
        } = this.props;
        let sensorsCnt = Object.keys(sensors.data).length;
        return (
            sensors.isFetching ?
            <div>Loading...</div>:
            <div style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    height: '100%'
                }}>
                <Header>
                    {
                        sensorsCnt === 0?
                        "Sensors not found":
                        sensorsCnt === 1?
                            "1 sensor found":
                            sensorsCnt + " sensors found"
                    }
                </Header>
                <div style={{
                        height: '100%',
                        overflowY: 'auto'
                    }}>
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
                                secondary
                                disabled={sensors.selectedIds.indexOf(sensor.id)>-1}
                                onClick={(e) => {
                                    addOffering(sensor)
                                }}>
                                <Icon name='area chart' /> Add
                            </Button>
                            <Divider section/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default SensorsBasket;
