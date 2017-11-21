import React, { Component } from 'react';

// Semantic UI components
import { Form, Header } from 'semantic-ui-react'


class ObservationTypesComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data) {
        const {
            observationTypeSelected,
            observationtypes
        } = this.props;
        for (var i = 0; i < observationtypes.data.length; i++) {
            if(observationtypes.data[i].definition === data.value){
                observationTypeSelected(observationtypes.data[i]);
                break;
            }
        }
    }

    render() {
        const {
            observationtypes
        } = this.props;
        var options = observationtypes.data.map((oty, key) => {
            return {
                key: "oty-opt-" + oty.id,
                value: oty.definition,
                text: oty.description,
                content: <Header
                    content={oty.description}
                    subheader={oty.definition} />
            }
        });
        return (
            <Form.Select
              fluid={true}
              options={options}
              placeholder='Select an unit of measure'
              onChange={this.handleChange}/>
          )
    }

};

export default ObservationTypesComponent;
