import React, { Component } from 'react';

// istSOS components
import {
    ObservableProperties,
    Uoms,
    ObservationTypes
} from '../../common';

// Semantic UI components
import {
    Form,
    Table,
    Button,
    Icon
} from 'semantic-ui-react'


class SensorFormObsProp extends Component {

    render() {
        const {
            sensorform,
            addObservableProperty,
            removeObservableProperty,
            single
        } = this.props;
        let onlyOne = false;
        if(single !== undefined && single === true){
            onlyOne = true;
        }
        return (
            <div>
                <Form widths='equal'>
                    <Form.Group>
                        <Form.Field>
                            <ObservableProperties/>
                        </Form.Field>
                        <Form.Field>
                            <Uoms/>
                        </Form.Field>
                        <Form.Field>
                            <ObservationTypes/>
                        </Form.Field>
                        <Form.Field>
                            {
                                onlyOne && sensorform.observableProperties.length>0?
                                null: <Button
                                    fluid
                                    icon={
                                        onlyOne? null: 'add'
                                    }
                                    onClick={e => {
                                        addObservableProperty();
                                    }}
                                    content={
                                        onlyOne? "Set": "Add"
                                    }/>
                            }
                        </Form.Field>
                    </Form.Group>
                </Form>
                {
                    sensorform.observableProperties.length>0?
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    #
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Observable property
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Unit of measure
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Result type
                                </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center">
                                    <Icon name='remove'/>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                sensorform.observableProperties.map((op, index) => (
                                    <Table.Row
                                            key={"is-ob-row-"+index}>
                                        <Table.Cell>
                                            {index}
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            {
                                                op.observedProperty.name === ""?
                                                op.observedProperty.def:
                                                op.observedProperty.name
                                            }
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            {op.uom.name} {
                                                op.uom.description !== ''?
                                                " ("+op.uom.description+")":
                                                null
                                            }
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            {op.resultType.description}
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            <Button
                                                fluid
                                                icon='remove'
                                                onClick={e => {
                                                    removeObservableProperty(index);
                                                }}
                                                content="Remove"/>
                                        </Table.Cell>
                                    </Table.Row>
                                ))
                            }
                        </Table.Body>
                    </Table>: null
                }
            </div>
        )
    }
};

export default SensorFormObsProp;
