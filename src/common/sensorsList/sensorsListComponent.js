import React, { Component } from 'react';

import { Table } from 'semantic-ui-react';

class SensorsListComponent extends Component {

    render() {
        const {
            sensors,
            sensorSelected
        } = this.props;
        return (
            <div>
            {
                sensors.isFetching?
                <div>
                    Loading...
                </div>:
                <Table celled selectable fixed compact singleLine>
                    <Table.Header>
                       <Table.Row>
                            <Table.HeaderCell>
                                Sensor
                            </Table.HeaderCell>
                            <Table.HeaderCell>
                                Feature of Interest
                            </Table.HeaderCell>
                            <Table.HeaderCell>

                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            sensors.data.map((sensor, key) => (
                                <Table.Row style={{
                                        cursor: 'pointer'
                                    }}
                                    active={
                                        sensors.selected !== null
                                            && sensors.selected.id === sensor.id?
                                        true: false
                                    }
                                    key={"sns-list-row-" + key}
                                    onClick={e => {
                                        sensorSelected(sensor);
                                    }}>
                                    <Table.Cell>
                                        {sensor.offering}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {sensor.sampled_foi}
                                    </Table.Cell>
                                    <Table.Cell>
                                       Cell
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>

                    {/*<Table.Footer>
                       <Table.Row>
                           <Table.HeaderCell colSpan='3'>
                               <Menu floated='right' pagination>
                                   <Menu.Item as='a' icon>
                                     <Icon name='left chevron' />
                                   </Menu.Item>
                                   <Menu.Item as='a'>1</Menu.Item>
                                   <Menu.Item as='a'>2</Menu.Item>
                                   <Menu.Item as='a'>3</Menu.Item>
                                   <Menu.Item as='a'>4</Menu.Item>
                                   <Menu.Item as='a' icon>
                                     <Icon name='right chevron' />
                                   </Menu.Item>
                               </Menu>
                           </Table.HeaderCell>
                       </Table.Row>
                    </Table.Footer>*/}
                </Table>
            }
            </div>
        )
    }
};

export default SensorsListComponent;
