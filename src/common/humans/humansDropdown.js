import React, { Component } from 'react';
import PropTypes from 'prop-types';

// istSOS components
import HumanForm from '../humanForm/humanFormContainer';

// Semantic UI components
import {
    Form,
    Header,
    Modal,
    Button
} from 'semantic-ui-react'

class HumansDropdown extends Component {
    handleChange(event, data) {
        const {
            onSelected,
            humans,
            //humanSelected
        } = this.props;
        for (let key in Object.keys(humans.data)) {
            if(humans.data[key].username === data.value){
                onSelected({
                    ...humans.data[key]
                });
                break;
            }
        }
    }
    render() {
        const {
            humans,
            openDialog,
            value,
            label
        } = this.props;
        var options = humans.data.map((human) => {
            return {
                key: "hum-opt-" + human.id,
                value: human.username,
                text: human.firstname + " " + human.lastname,
                content: <Header
                content={human.firstname + " " + human.lastname}
                subheader={human.username}/>
            }
        });
        return (
            <Form.Group>
                <Form.Select
                    fluid={true}
                    options={options}
                    placeholder='Select the person'
                    value={
                        value !== null? value.username: null
                    }
                    onChange={this.handleChange.bind(this)}/>
                {
                  humans.dialog===true?
                  <Modal
                      open={humans.dialog}
                      onClose={(e) => {
                          openDialog(false)
                      }}>
                      <Modal.Header>
                            Add a new {
                                label !== undefined? label: "person"
                            }
                      </Modal.Header>
                      <Modal.Content>
                          <Modal.Description>
                              <HumanForm/>
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

HumansDropdown.propTypes = {
    onSelected: PropTypes.func.isRequired,
    value: PropTypes.object
};

export default HumansDropdown;
