import React, { Component } from 'react';

// istSOS components
import {
    Humans
} from '../../common';

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
            case "sensorFormKeywords":
                this.props.setKeyword(
                    event.target.value
                );
                break;
            default:
                this.props.updateMetadata(
                    event.target.id.replace('sf-', ''),
                    event.target.value
                );
                break;
        }
    }

    render() {
        const {
            sensorform,
            removeKeyword
        } = this.props;
        return (
            <Form widths='equal'>
                <Form.Field required>
                    <label>Sensor name</label>
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
                <Divider horizontal>
                    Optional metadata
                </Divider>
                <Header as='h3'>
                    General info
                </Header>
                <Form.Field>
                    <label>Alias</label>
                    <Input
                        id="sf-alias"
                        placeholder='Give this sensor an alias'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.alias}/>
                </Form.Field>
                <Form.Field>
                    <label>Keywords</label>
                    {
                        sensorform.keywords.length>0?
                        <div style={{paddingBottom: '0.5em'}}>
                            {
                                sensorform.keywords.map((keyword, index) => (
                                    <Label key={'sfd-kw-'+index} color='black'>
                                      {keyword}
                                      <Icon name='delete' onClick={(e)=>{
                                          removeKeyword(index);
                                      }}/>
                                    </Label>
                                ))
                            }
                        </div>: null
                    }
                    <Input
                        id="sensorFormKeywords"
                        placeholder='Add some keywords that describe this sensor'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        onKeyPress={(e)=>{
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                this.props.setKeyword(
                                    e.target.value + ","
                                );
                            }
                        }}
                        value={sensorform.keyword}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        id="sf-description"
                        placeholder='Describe in details this sensor'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.description}/>
                </Form.Field>

                <Header as='h3'>
                    Identification
                </Header>
                <p>
                    Means of providing various identity values
                </p>
                <Form.Field>
                    <label>Manufacturer</label>
                    <Humans
                        layout="dropdown"
                        onSelected={(human) => {
                            this.props.updateMetadata(
                                'manufacturer',
                                human
                            )
                        }}
                        value={sensorform.manufacturer}/>
                </Form.Field>
                <Form.Field>
                    <label>Model number</label>
                    <Input
                        id="sf-modelNumber"
                        placeholder='What is the model number?'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.modelNumber}/>
                </Form.Field>
                <Form.Field>
                    <label>Serial number</label>
                    <Input
                        id="sf-serialNumber"
                        placeholder='What is the serial number?'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.serialNumber}/>
                </Form.Field>

                <Header as='h3'>
                    Capabilities
                </Header>
                <p>
                    Capability list for quick discovery
                </p>
                <Form.Field
                    error={!sensorform.samplingTimeResolutionValid}>
                    <label>
                        Sampling time resolution
                        (ISO 8601 time intervals)
                    </label>
                    <Input
                        id="sf-samplingTimeResolution"
                        placeholder='What is the frequency?'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.samplingTimeResolution}/>
                </Form.Field>
                <Form.Field
                    error={!sensorform.acquisitionTimeResolutionValid}>
                    <label>
                        Acquisition time resolution
                        (ISO 8601 time intervals)
                    </label>
                    <Input
                        id="sf-acquisitionTimeResolution"
                        placeholder='How often are the data sent?'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.acquisitionTimeResolution}/>
                </Form.Field>
                <Form.Field>
                    <label>
                        Storage capacity
                    </label>
                    <Input
                        id="sf-storageCapacity"
                        placeholder='How often are the data sent?'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.storageCapacity}/>
                </Form.Field>
                <Form.Field>
                    <label>
                        Battery capacity
                    </label>
                    <Input
                        id="sf-batteryCapacity"
                        placeholder='How is the battery capacity?'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={sensorform.batteryCapacity}/>
                </Form.Field>

                <Divider section/>

                <Header as='h3'>
                    Contacts
                </Header>
                <Form.Field>
                    <label>Owner</label>
                    <Humans
                        layout="dropdown"
                        label="owner"
                        onSelected={(human) => {
                            this.props.updateMetadata(
                                'owner',
                                human
                            )
                        }}
                        value={sensorform.owner}/>
                </Form.Field>
                <Form.Field>
                    <label>Operator</label>
                    <Humans
                        layout="dropdown"
                        onSelected={(human) => {
                            this.props.updateMetadata(
                                'operator',
                                human
                            )
                        }}
                        value={sensorform.operator}/>
                </Form.Field>
            </Form>
        )
    }
};

export default SensorFormMetadata;
