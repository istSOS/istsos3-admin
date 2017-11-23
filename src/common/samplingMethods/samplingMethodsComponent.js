import React, { Component } from 'react';

// istSOS components
import SamplingMethodForm from '../samplingMethodForm/samplingMethodFormContainer';

// Semantic UI components
import {
    Form,
    Header,
    Modal,
    Button
} from 'semantic-ui-react'

class SamplingMethodsComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data) {
        const {
            samplingmethods,
            samplingMethodSelected
        } = this.props;
        for (var i = 0; i < samplingmethods.data.length; i++) {
            if(samplingmethods.data[i].identifier === data.value){
                samplingMethodSelected(samplingmethods.data[i]);
                break;
            }
        }
    }

    render() {
        const {
            samplingmethods,
            openDialog
        } = this.props;
        var options = samplingmethods.data.map((oty, key) => {
            return {
                key: oty.id,
                value: oty.identifier,
                text: oty.name,
                content: <Header
                    content={oty.name}
                    subheader={oty.description} />
            }
        })
        return (
            <Form.Group>
                <Form.Select
                    fluid={true}
                    options={options}
                    placeholder='Select an observable property..'
                    onChange={this.handleChange}/>
                {
                    samplingmethods.dialog===true?
                    <Modal
                        open={samplingmethods.dialog}
                        onClose={(e) => {
                            openDialog(false)
                        }}>
                        <Modal.Header>
                            Add a new sampling method
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <SamplingMethodForm/>
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

export default SamplingMethodsComponent;
