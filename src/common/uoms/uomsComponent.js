import React, { Component } from 'react';

class UomsComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {
            onSelected,
            uoms
        } = this.props;
        if(onSelected!==undefined){
            for (var i = 0; i < uoms.data.length; i++) {
                if(uoms.data[i].name === event.target.value){
                    onSelected({
                        ...uoms.data[i]
                    });
                    break;
                }
            }
        }
    }

    render() {
        const {
            uoms
        } = this.props;
        //const data = uoms.data;
        return (
            <select
                className="form-control"
                onChange={this.handleChange}>
                <option
                    value=''>
                    Select an unit of measure..
                </option>
                {
                    uoms.data.map((uom, key) => (
                        <option
                            key={"uom-opt-"+uom.name}
                            value={uom.name}>
                            {uom.name}
                        </option>
                    ))
                }
            </select>
        )
    }
};

export default UomsComponent;
