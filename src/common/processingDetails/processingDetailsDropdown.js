import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Semantic UI components
import { Form, Header } from 'semantic-ui-react'

class ProcessingDetailsDropdown extends Component {
    handleChange(event, data) {
        const {
            onSelected,
            processingdetails
        } = this.props;
        for (let key in Object.keys(processingdetails.data)) {
            if(processingdetails.data[key].identifier === data.value){
                onSelected({
                    ...processingdetails.data[key]
                });
                break;
            }
        }
    }
    render() {
        const {
            processingdetails,
            value
        } = this.props;
        var options = processingdetails.data.map((pd) => {
            return {
                key: "pds-opt-" + pd.id,
                value: pd.identifier,
                text: pd.name,
                content: <Header
                    content={pd.name}
                    subheader={pd.description}/>
            }
        });
        return (
            <Form.Select
                fluid={true}
                options={options}
                placeholder='Select the processing detail'
                value={
                    value !== null? value.identifier: null
                }
                onChange={this.handleChange.bind(this)}/>
        )
    }
};

ProcessingDetailsDropdown.propTypes = {
    onSelected: PropTypes.func.isRequired,
    value: PropTypes.object
};

export default ProcessingDetailsDropdown;
