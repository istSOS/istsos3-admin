import React, { Component } from 'react';
import PropTypes from 'prop-types';

// istSOS components
import ProcessingDetailForm from '../processingDetailForm/processingDetailFormContainer';

// Semantic UI components
import {
    Form,
    Header,
    Modal,
    Button
} from 'semantic-ui-react';

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
            openDialog,
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
            <Form.Group>
                <Form.Select
                    fluid={true}
                    options={options}
                    placeholder='Processing detail'
                    value={
                        value !== null? value.identifier: null
                    }
                    onChange={this.handleChange.bind(this)}/>
                {
                    processingdetails.dialog===true?
                    <Modal
                        open={processingdetails.dialog}
                        onClose={(e) => {
                            openDialog(false)
                        }}>
                        <Modal.Header>
                            Add a new Processing Detail
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <ProcessingDetailForm/>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>:
                    <Button
                        circular
                        secondary
                        icon='add'
                        onClick={(e) => {
                            openDialog(true)
                        }}/>
                }
            </Form.Group>
        )
    }
};

ProcessingDetailsDropdown.propTypes = {
    onSelected: PropTypes.func.isRequired,
    value: PropTypes.object
};

export default ProcessingDetailsDropdown;
