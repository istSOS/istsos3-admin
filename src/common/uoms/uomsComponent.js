import React, { Component } from 'react';

// istSOS components
import UomForm from '../uomForm/uomFormContainer';

// Semantic UI components
import {
    Form,
    Header,
    Modal,
    Button
} from 'semantic-ui-react'


class UomsComponent extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, data) {
        const {
            onSelected,
            uomSelected,
            uoms
        } = this.props;
        for (var i = 0; i < uoms.data.length; i++) {
            if(uoms.data[i].name === data.value){
                uomSelected(data.value);
                if(onSelected!==undefined){
                    onSelected(data.value);
                }
                break;
            }
        }
    }

    render() {
        const {
            uoms,
            openDialog
        } = this.props;
        var options = uoms.data.map((uom, key) => {
            return {
              key: "uoms-opt-" + uom.id,
              value: uom.name,
              text: uom.description,
              content: <Header content={uom.name} subheader={uom.description} />
            }
        });
        return (
            <Form.Group>
                <Form.Select
                    style={{width: '100%'}}
                    //fluid={true}
                    options={options}
                    placeholder='Select an unit of measure'
                    value={
                        uoms.selected !== null?
                        uoms.selected: null
                    }
                    onChange={this.handleChange}/>
                {
                    uoms.dialog===true?
                    <Modal
                        open={uoms.dialog}
                        onClose={(e) => {
                            openDialog(false)
                        }}>
                        <Modal.Header>
                          §Add a new unit of measure
                        </Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <UomForm/>
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

export default UomsComponent;
