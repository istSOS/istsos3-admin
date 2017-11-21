import React, { Component } from 'react';

// Semantic UI components
import {
    Form,
    Header,
    Input,
    Divider,
    TextArea,
    Label,
    Icon
} from 'semantic-ui-react'


class SensorFormMetadata extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
    }

    handleChange(event) {
        switch (event.target.id) {
            case "sensorFormName":
                let sn = event.target.value.replace(/[^\w]/gi, '');
                this.props.setSensorName(sn);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(sn.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.sensorform.name.length > 0){
                            this.props.checkSensorName(
                                this.props.sensorform.name);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "sensorFormDescription":
                this.props.setSensorDescription(
                    event.target.value
                );
                break;
            default:
        }
    }

    render() {
        const {
            sensorform
        } = this.props;
        return (
            <Form>
                <Form.Field required>
                    <label>Sensor name {sensorform.validatingName}</label>
                    <Input
                        iconPosition='left'
                        icon={
                            sensorform.validated === true && sensorform.valid === true?
                            'check': 'delete'
                        }
                        loading={sensorform.validatingName}
                        id="sensorFormName"
                        placeholder='Give this sensor a name'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.name}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        sensorform.validated && !sensorform.valid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Sensor name already exists
                        </Label>:
                        <Label
                            basic
                            color='blue'
                            pointing>
                            <Icon name='info circle' />
                            No special characters: only alfanumeric and underscore are permitted characters.
                        </Label>
                    }
                </Form.Field>
                <Divider section/>
                <Header as='h3'>
                    Optional metadata
                </Header>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        id="sensorFormDescription"
                        placeholder='Describe in details this sensor'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.description}/>
                </Form.Field>
            </Form>
        )
    }
};

export default SensorFormMetadata;
