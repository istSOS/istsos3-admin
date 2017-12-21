import React, { Component } from 'react';

// Semantic UI components
import {
    Header,
    List,
    Button
} from 'semantic-ui-react';

class SensorsBasket extends Component {
    render() {
        const {
            sensors,
            removeOffering
        } = this.props;
        //let sensorsCnt = Object.keys(sensors.data).length;
        return (
            <div style={{padding: '1em'}}>
                <Header>
                    Selected sensors
                </Header>
                <List divided verticalAlign='middle'>
                {sensors.selected.map((sensor, index) => (
                    <List.Item key={'snsel-row-'+index}>
                        <List.Content floated='right'>
                            <Button
                                circular
                                icon="remove"
                                onClick={(e)=>{
                                    removeOffering(index)
                                }}/>
                        </List.Content>
                        <List.Content>
                            <List.Header>
                                {sensor.name}
                            </List.Header>
                            <List.Description>
                                {sensor.sampled_foi.name}
                            </List.Description>
                        </List.Content>
                    </List.Item>
                ))}
                </List>
            </div>
        )
    }
};

export default SensorsBasket;
