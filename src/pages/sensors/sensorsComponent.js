import React, { Component } from 'react';

// istSOS components
import {
    ObservableProperties
} from '../../common';

// Semantic UI components
import {
    Card,
    Form,
    Icon,
    Grid,
    Button,
    Segment,
    Header,
    Popup
} from 'semantic-ui-react'

// Date picker
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class SensorsComponent extends Component {

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    }
    isSelectingFirstDay(from, to, day) {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }
    handleDayClick(day) {
        const { sensors, updateDateRange } = this.props;
        const from = sensors.from;
        const to = sensors.to;
        if (from && to && day >= from && day <= to) {
            this.handleResetClick();
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)) {
            updateDateRange({
                from: day,
                to: null,
                enteredTo: null,
            });
        } else {
            updateDateRange({
                to: day,
                enteredTo: day,
            });
        }
    }
    handleDayMouseEnter(day) {
        const { sensors, updateDateRange } = this.props;
        const from = sensors.from;
        const to = sensors.to;
        if (!this.isSelectingFirstDay(from, to, day)) {
            updateDateRange({
                enteredTo: day,
            });
        }
    }
    handleResetClick() {
        const { resetDateRange } = this.props;
        resetDateRange();
    }
    render() {
        const {
            sensors,
            applyObsPropFilter
        } = this.props;
        const selectedDays = [sensors.from, { from: sensors.from, to: sensors.enteredTo }];
        return (
            <div style={{padding: '1em'}}>
                <Grid columns={3}>
                    <Grid.Column width={4}>
                        <Segment raised>
                            <Header as='h3'>
                                Search for sensors
                            </Header>
                                <p>
                                Apply filters to find sensors
                                </p>
                            <Form>
                            <ObservableProperties
                                layout="dropdown"
                                onSelected={applyObsPropFilter}/>
                            <Form.Group widths='equal'>
                                <Popup
                                    trigger={
                                        <Form.Input
                                        icon={<Icon name='calendar'
                                        inverted circular />}
                                        placeholder='From date' />
                                    }
                                    on='focus'
                                    position='bottom left'>
                                    <Popup.Content>
                                        <DayPicker
                                            className="Range"
                                            numberOfMonths={2}
                                            showWeekNumbers
                                            fromMonth={sensors.from}
                                            selectedDays={selectedDays}
                                            onDayClick={this.handleDayClick}
                                            onDayMouseEnter={this.handleDayMouseEnter}/>
                                    </Popup.Content>
                                </Popup>
                                <Form.Input
                                    icon={<Icon name='calendar'
                                    inverted circular />}
                                    placeholder='To date' />
                                </Form.Group>
                                <Button fluid type='button'>Find</Button>
                            </Form>
                        </Segment>
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
