import React, { Component } from 'react';

// Semantic UI components
import { Form, Header } from 'semantic-ui-react'

class SamplingTypesComponent extends Component {
    /**
        Create a select with data fetched from the server,
        if configured, on Selected return the data record.

        data record: {
            id: number,
            name: text,
            definition: text:ogc_uri
        }
    */
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data) {
        const {
            onSelected,
            samplingtypes
        } = this.props;
        if(onSelected!==undefined){
            for (var i = 0; i < samplingtypes.data.length; i++) {
                if(samplingtypes.data[i].definition === data.value){
                    onSelected({
                        ...samplingtypes.data[i]
                    });
                    break;
                }
            }
        }
    }

    render() {
        const {
            samplingtypes,
            //selected,
            value,
            disabled
        } = this.props;
        if(value!==undefined && disabled===true){
            return (
                <div>
                    {value}
                </div>
            );
        }else{
            var options = samplingtypes.data.map((sams, key) => {
                return {
                  key: sams.id,
                  value: sams.definition,
                  text: sams.definition,
                  content: <Header
                    content={sams.name}
                    subheader={sams.definition} />
                }
            })
            return (
                <Form.Select
                    value={value}
                    fluid={true}
                    options={options}
                    placeholder='Select the sampling type..'
                    onChange={this.handleChange}/>
            );
        }
    }
};

export default SamplingTypesComponent;
