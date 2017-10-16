import React, { Component } from 'react';

class ObservationTypesComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {
            onSelected,
            observationtypes
        } = this.props;
        if(onSelected!==undefined){
            for (var i = 0; i < observationtypes.data.length; i++) {
                if(observationtypes.data[i].definition === event.target.value){
                    onSelected({
                        ...observationtypes.data[i]
                    });
                    break;
                }
            }
        }
    }

    render() {
        const {
            observationtypes
        } = this.props;
        const data = observationtypes.data;
        return (
            <select
                className="form-control"
                onChange={this.handleChange}>
                <option
                    value=''>
                    Select the result type..
                </option>
                {
                    data.map((observationtype, key) => (
                        observationtype.id !== 14 && observationtype.id !== 2 ?
                        <option
                            key={"oty-opt-"+observationtype.id}
                            value={observationtype.definition}>
                            {observationtype.description}
                        </option>: null
                    ))
                }
            </select>
        )
    }
};

export default ObservationTypesComponent;
