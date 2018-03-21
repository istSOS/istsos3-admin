import React, { Component } from 'react';

// istSOS components
// import {
//     ObservableProperties,
//     Uoms,
//     ObservationTypes
// } from '../../common';

// istSOS components
import {
    //Uoms,
    ListUoms,
    ListObsProps,
    ObservationTypes
} from 'istsos3-ui';

// Semantic UI components
import {
    Table,
    Button,
    Icon,
    Segment,
    Header,
    Label
} from 'semantic-ui-react'


class SensorFormObsProp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            observedProperty: null,
            uom: null,
            oty: null
        };
    }

    render() {
        const {
            sensorform,
            observablePropertySelected,
            uomSelected,
            observationTypeSelected,
            addObservableProperty,
            removeObservableProperty,
            single,
            uoms,
            observed_properties
        } = this.props;
        const {
            observedProperty,
            uom,
            oty
        } = this.state;
        let onlyOne = false;
        if(single !== undefined && single === true){
            onlyOne = true;
        }
        return (
            <div style={{
                    flex: "1 1 0%",
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <div style={{
                        flex: '0.2 1 300px',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                    <div style={{
                            padding: "0.5em 1em 0.5em 0px",
                            flex: '1 1 0%',
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <Segment.Group style={{
                                flexDirection: "column",
                                display: "flex"
                            }}>
                            <Segment inverted>
                                <Header sub>Observed property:</Header>
                            </Segment>
                            <Segment style={{
                                    flex: "1 1 0%",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                <ListObsProps
                                    observed_properties={observed_properties.data}
                                    onSelected={observed_property => {
                                        this.setState({
                                            observedProperty: observed_property
                                        });
                                        observablePropertySelected(observed_property);
                                    }}/>
                            </Segment>
                            <Segment>
                                {
                                    observedProperty !== null?
                                    <Label color="black" style={{width: '100%'}}>
                                        {observedProperty.name}
                                    </Label>:
                                    <span style={{color: '#787878'}}>Please select</span>
                                }
                            </Segment>
                        </Segment.Group>
                    </div>
                    <div style={{
                            padding: "0.5em 1em 0.5em 0px",
                            flex: '1 1 0%',
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <Segment.Group style={{
                                flexDirection: "column",
                                display: "flex"
                            }}>
                            <Segment inverted>
                                <Header sub>Unit of measure:</Header>
                            </Segment>
                            <Segment style={{
                                    flex: "1 1 0%",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                <ListUoms
                                    uoms={uoms.data}
                                    onSelected={uom => {
                                        this.setState({
                                            uom: uom
                                        });
                                        uomSelected(uom);
                                    }}/>
                            </Segment>
                            <Segment>
                                {
                                    uom !== null?
                                    <Label color="black" style={{width: '100%'}}>{uom.name}</Label>:
                                    <span style={{color: '#787878'}}>Please select</span>
                                }
                            </Segment>
                        </Segment.Group>
                    </div>
                    <div style={{
                            padding: "0.5em 0px 0.5em 0px",
                            flex: '1 1 0%',
                            display: "flex",
                            flexDirection: "column"
                        }}>
                        <Segment.Group style={{
                                flexDirection: "column",
                                display: "flex"
                            }}>
                            <Segment inverted>
                                <Header sub>Data Type:</Header>
                            </Segment>
                            <Segment style={{
                                    flex: "1 1 0%",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column"
                                }}>
                                <ObservationTypes layout='list'
                                    onSelected={oty => {
                                        this.setState({
                                            oty: oty
                                        });
                                        observationTypeSelected(oty);
                                    }}/>
                            </Segment>
                            <Segment>
                                {
                                    oty !== null?
                                    <Label color="black" style={{width: '100%'}}>{oty.description}</Label>:
                                    <span style={{color: '#787878'}}>Please select</span>
                                }
                            </Segment>
                        </Segment.Group>
                    </div>
                </div>
                <div style={{
                        padding: '1em'
                    }}>
                {
                    observedProperty !== null !== null
                    && oty !== null
                    && uom !== null?
                    <Button
                        primary
                        fluid
                        icon={
                            onlyOne? null: 'add'
                        }
                        onClick={e => {
                            addObservableProperty();
                        }}
                        content={
                            onlyOne? "Set": "Add"
                        }/>: null
                }
                </div>
                <div style={{
                        flex: '1 1 0%',
                        overflowY: 'auto',
                        padding: '1em'
                    }}>
                    {
                        sensorform.observableProperties.length>0?
                        <Table basic='very'>
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
                                            <Table.Cell singleLine textAlign="center">
                                                <Button
                                                    circular
                                                    size='tiny'
                                                    color='red'
                                                    icon='remove'
                                                    onClick={e => {
                                                        removeObservableProperty(index);
                                                    }}/>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>: null
                    }
                </div>
            </div>
        );


        /*
        return (
            <div>
                <Form widths='equal'>
                    <Form.Group>
                        <Form.Field>
                        </Form.Field>
                        <Form.Field>
                            <ListUoms
                                uoms={uoms.data}/>
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
        */
    }
};

export default SensorFormObsProp;
