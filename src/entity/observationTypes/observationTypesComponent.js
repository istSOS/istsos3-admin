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
                if(observationtypes.data[i].def == event.target.value){
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
                className="dropdown"
                onChange={this.handleChange}>
                <option
                    value=''>
                    Select an observable property..
                </option>
                {
                    observationtypes.data.map((oty, key) => (
                        <option
                            key={"oty-row-"+oty.def}
                            value={oty.def}>
                            {oty.def}
                        </option>
                    ))
                }
            </select>
        )
    }
};

export default ObservationTypesComponent;

/*<table className="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Definition</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        {
            observationtypes.data.map((oty, key) => (
                <tr key={"oty-row-"+oty.def}>
                    <td>
                        {oty.name}
                    </td>
                    <th scope="row">
                        {oty.def}
                    </th>
                    <td>
                        {oty.description}
                    </td>
                </tr>
            ))
        }
    </tbody>
</table>*/
