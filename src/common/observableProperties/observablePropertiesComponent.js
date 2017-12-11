import React, { Component } from 'react';

// istSOS components
import ObservablePropertyForm from '../observablePropertyForm/observablePropertyFormContainer';

// Semantic UI components
import {
    Form,
    Header,
    Modal,
    Button
} from 'semantic-ui-react'

class ObservablePropertiesComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data) {
        const {
            //onSelected,
            observableproperties,
            observablePropertySelected
        } = this.props;
        for (var i = 0; i < observableproperties.data.length; i++) {
            if(observableproperties.data[i].definition === data.value){
                observablePropertySelected(observableproperties.data[i]);
                break;
            }
        }
    }

    render() {
        const {
            observableproperties,
            openDialog
        } = this.props;
        var options = observableproperties.data.map((oty, key) => {
            return {
                key: oty.id,
                value: oty.definition,
                text: oty.name,
                content: <Header
                    content={oty.name}
                    subheader={oty.definition} />
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
                    observableproperties.dialog===true?
                    <Modal
                        key="opc-md"
                        open={observableproperties.dialog}
                        onClose={(e) => {
                            openDialog(false)
                        }}>
                        <Modal.Header>
                            Add a new observable property
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <ObservablePropertyForm/>
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

export default ObservablePropertiesComponent;
