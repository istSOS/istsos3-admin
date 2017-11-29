import React, { Component } from 'react';

// istSOS components
import {
    Humans,
    ProcessingDetails
} from '../../common';

// Semantic UI components
import {
    Form,
    Input,
    Popup,
    Button,
    Table,
    Icon
} from 'semantic-ui-react';

// Date picker
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class SpecimenFormProcessing extends Component {
    render() {
        const {
            specimenform,
            setOperator,
            setProcessingDetails,
            setSpecimenProcessingDetailsDate,
            setSpecimenProcessingDetailsTime,
            addProcessingDetails,
            removeProcessingDetails
        } = this.props;
        console.log(specimenform.valid);
        return (
            <div>
                <Form widths='equal'>
                    <Form.Group>
                        <Form.Field required>
                            <label>Operator</label>
                            <Humans
                                layout="dropdown"
                                onSelected={setOperator}
                                value={specimenform.operator}/>
                        </Form.Field>
                        <Form.Field required>
                            <label>Processing Details</label>
                            <ProcessingDetails
                                layout="dropdown"
                                onSelected={setProcessingDetails}
                                value={specimenform.details}/>
                        </Form.Field>
                        <Form.Field
                            error={!specimenform.processingTimeValid}>
                            <label>Processing date {
                                specimenform.processingDate.length>0?
                                " (YYYY-MM-DD)": null
                            }</label>
                            <Popup
                                trigger={
                                    <Input
                                        icon='calendar'
                                        iconPosition='left'
                                        placeholder='YYYY-MM-DD'
                                        onChange={(e) => {
                                            setSpecimenProcessingDetailsDate(
                                                e.target.value
                                            )
                                        }}
                                        value={specimenform.processingDate}
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"/>
                                }
                                on='focus'
                                position='bottom left'>
                                <Popup.Content>
                                    <DayPicker
                                        showWeekNumbers
                                        onDayClick={(day, { selected }) => {
                                            setSpecimenProcessingDetailsDate(
                                                moment(day).format("YYYY-MM-DD")
                                            );
                                        }}
                                        selectedDays={
                                            specimenform.processingDate?
                                            moment(specimenform.processingDate).toDate():
                                            undefined
                                        }
                                        todayButton="Today"/>
                                </Popup.Content>
                            </Popup>
                        </Form.Field>
                        <Form.Field
                            error={!specimenform.processingTimeValid}>
                            <label>Time {
                                specimenform.processingTime.length>0?
                                " (HH:MM:SS)": null
                            }</label>
                            <Input
                                icon='time'
                                iconPosition='left'
                                placeholder='HH:MM:SS'
                                onChange={(e) => {
                                    setSpecimenProcessingDetailsTime(
                                        e.target.value
                                    )
                                }}
                                value={specimenform.processingTime}
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"/>
                        </Form.Field>
                        <Form.Field>
                            <label>&nbsp;</label>
                            <Button
                                disabled={!specimenform.processingDetailsValid}
                                fluid
                                icon='add'
                                onClick={e => {
                                    addProcessingDetails();
                                }}
                                content={"Add"}/>
                        </Form.Field>
                    </Form.Group>
                </Form>
                {
                    specimenform.data.processingDetails.length>0?
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    #
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Operator
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Processing
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    Time
                                </Table.HeaderCell>
                                <Table.HeaderCell textAlign="center">
                                    <Icon name='remove'/>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {
                            specimenform.data.processingDetails.map(
                                    (pd, index) => (
                                    <Table.Row
                                            key={"is-ob-row-"+index}>
                                        <Table.Cell>
                                            {index+1}
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            {
                                                pd.processOperator.href
                                            }
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            {
                                                pd.processingDetails.href
                                            }
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            {
                                                pd.time.timeInstant.instant
                                            }
                                        </Table.Cell>
                                        <Table.Cell singleLine>
                                            <Button
                                                fluid
                                                icon='remove'
                                                onClick={e => {
                                                    removeProcessingDetails(index);
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

export default SpecimenFormProcessing;
