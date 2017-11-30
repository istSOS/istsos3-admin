import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

export default class Example extends React.Component {
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
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    }
    handleResetClick() {
    this.setState(this.getInitialState());
    }
    render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
        <div className="RangeExample">
            <DayPicker
              className="Selectable"
              numberOfMonths={this.props.numberOfMonths}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
            />
        </div>
    );
    }
}
