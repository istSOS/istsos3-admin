import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';

// Semantic UI components
import {
    Form,
    Icon,
    Popup
} from 'semantic-ui-react';

class DateRange extends Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.state = this.getInitialState();
    }
    getInitialState() {
        return {
            from: undefined,
            to: undefined,
        };
    }
    handleDayClick(day) {
        const { onRangeSelected } = this.props;
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
        if(onRangeSelected!==undefined){
            onRangeSelected({
                from: range.from? moment(range.from).format("YYYY-MM-DD"): null,
                to: range.to? moment(range.to).add(1, 'days').format("YYYY-MM-DD"): null
            });
        }
        console.log(range);
    }
    handleResetClick() {
        this.setState(this.getInitialState());
    }
    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <Form.Group widths='equal'>
                <Popup
                    trigger={
                        <Form.Input
                            value={
                                from?
                                moment(from).format("YYYY-MM-DD"): ''
                            }
                            icon={<Icon name='calendar'/>}
                            placeholder='From date' />
                    }
                    on='focus'
                    position='bottom left'>
                    <Popup.Content>
                        <DayPicker
                            firstDayOfWeek={1}
                            showWeekNumbers
                            className="Selectable"
                            numberOfMonths={this.props.numberOfMonths}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={this.handleDayClick}
                        />
                    </Popup.Content>
                </Popup>
                <Popup
                    trigger={
                        <Form.Input
                            value={
                                to?
                                moment(to).format("YYYY-MM-DD"): ''
                            }
                            icon={<Icon name='calendar'/>}
                            placeholder='To date' />
                    }
                    on='focus'
                    position='bottom right'>
                    <Popup.Content>
                        <DayPicker
                            firstDayOfWeek={1}
                            showWeekNumbers
                            className="Selectable"
                            numberOfMonths={this.props.numberOfMonths}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={this.handleDayClick}
                        />
                    </Popup.Content>
                </Popup>
            </Form.Group>
        );
    }
}

export default DateRange;
