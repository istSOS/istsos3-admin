import React, { Component } from 'react';

class ObservablePropertiesComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {
            onSelected,
            observableproperties
        } = this.props;
        if(onSelected!==undefined){
            for (var i = 0; i < observableproperties.data.length; i++) {
                if(observableproperties.data[i].def === event.target.value){
                    onSelected({
                        ...observableproperties.data[i]
                    });
                    break;
                }
            }
        }
    }

    render() {
        const {
            observableproperties
        } = this.props;
        //const data = observableproperties.data;
        return (
            <select
                className="form-control"
                onChange={this.handleChange}>
                <option
                    value=''>
                    Select an observable property..
                </option>
                {
                    observableproperties.data.map((oty, key) => (
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

export default ObservablePropertiesComponent;

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
