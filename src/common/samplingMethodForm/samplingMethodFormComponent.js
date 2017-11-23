import React, { Component } from 'react';

// Semantic UI components
import {
    Form,
    Input,
    TextArea,
    Label,
    Icon,
    Button,
    Container
} from 'semantic-ui-react'


class SamplingMethodFormComponent extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
        this.checkidentifier = false;
    }

    handleChange(event) {
        switch (event.target.id) {
            case "samplingMethodFormName":
                let name = event.target.value;
                this.props.setSamplingMethodName(name);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(name.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.samplingmethodform.data.name.length > 0){
                            this.props.checkSamplingMethodName(
                                this.props.samplingmethodform.data.name);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "samplingMethodFormIdentifier":
                let idn = event.target.value.replace(/[^\w:-]\./gi, '');
                this.props.setSamplingMethodIdentifier(idn);
                if(this.checkidentifier){
                    clearTimeout(this.checkidentifier);
                    this.checkidentifier = false;
                }
                if(idn.length > 0){
                    this.checkidentifier = setTimeout(function(){
                        if(this.props.samplingmethodform.data.identifier.length > 0){
                            this.props.checkSamplingMethodIdentifier(
                                this.props.samplingmethodform.data.identifier);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "samplingMethodFormDescription":
                this.props.setSamplingMethodDescription(
                    event.target.value
                );
                break;
            default:
        }
    }

    render() {
        const {
            samplingmethodform,
            createSamplingMethod
        } = this.props;
        return (
            <Form>
                <Form.Field required>
                    <label>Name</label>
                    <Input
                        iconPosition='left'
                        icon={
                            samplingmethodform.nameValidated === true
                                && samplingmethodform.nameValid === true?
                            'check': 'delete'
                        }
                        loading={samplingmethodform.validatingName}
                        id="samplingMethodFormName"
                        placeholder='Give this sampling method a name'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={samplingmethodform.data.name}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        samplingmethodform.nameValidated
                            && !samplingmethodform.nameValid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Sampling method name already assigned
                        </Label>: null
                    }
                </Form.Field>
                <Form.Field required>
                    <label>Identifier</label>
                    <Input
                        iconPosition='left'
                        icon={
                            samplingmethodform.identifierValidated === true
                                && samplingmethodform.identifierValid === true?
                            'check': 'delete'
                        }
                        loading={samplingmethodform.validatingIdentifier}
                        id="samplingMethodFormIdentifier"
                        placeholder='Sampling method identifier'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={samplingmethodform.data.identifier}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        samplingmethodform.identifierValidated
                            && !samplingmethodform.identifierValid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Sampling method identifier already exists
                        </Label>:
                        <Label
                            basic
                            color='blue'
                            pointing>
                            <Icon name='info circle' />
                            Only alfanumeric, '-', ':' and '.' are permitted
                        </Label>
                    }
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        id="samplingMethodFormDescription"
                        placeholder='Describe this observable property'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={samplingmethodform.data.description}/>
                </Form.Field>
                <Container>
                    <Button
                        primary
                        disabled={!samplingmethodform.valid}
                        loading={samplingmethodform.saving}
                        onClick={e => {
                            createSamplingMethod(
                                samplingmethodform.data
                            );
                        }}>
                        Add
                    </Button>
                </Container>
            </Form>
        )
    }
};

export default SamplingMethodFormComponent;
