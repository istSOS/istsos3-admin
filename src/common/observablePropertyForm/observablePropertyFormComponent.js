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


class ObservablePropertyFormComponent extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
        this.checkdefinition = false;
    }

    handleChange(event) {
        switch (event.target.id) {
            case "observablePropertyFormName":
                let name = event.target.value;
                this.props.setObservablePropertyName(name);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(name.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.observablepropertyform.data.name.length > 0){
                            this.props.checkObservablePropertyName(
                                this.props.observablepropertyform.data.name);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "observablePropertyFormDefinition":
                let def = event.target.value.replace(/[^\w:-]\./gi, '');
                this.props.setObservablePropertyDefinition(def);
                if(this.checkdefinition){
                    clearTimeout(this.checkdefinition);
                    this.checkdefinition = false;
                }
                if(def.length > 0){
                    this.checkdefinition = setTimeout(function(){
                        if(this.props.observablepropertyform.data.definition.length > 0){
                            this.props.checkObservablePropertyDefinition(
                                this.props.observablepropertyform.data.definition);
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
            observablepropertyform,
            createObservableProperty
        } = this.props;
        return (
            <Form>
                <Form.Field required>
                    <label>Name</label>
                    <Input
                        iconPosition='left'
                        icon={
                            observablepropertyform.nameValidated === true
                                && observablepropertyform.nameValid === true?
                            'check': 'delete'
                        }
                        loading={observablepropertyform.validatingName}
                        id="observablePropertyFormName"
                        placeholder='Give this observable property a name'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={observablepropertyform.data.name}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        observablepropertyform.nameValidated
                            && !observablepropertyform.nameValid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Observable property name already assigned
                        </Label>: null
                    }
                </Form.Field>
                <Form.Field required>
                    <label>Definition</label>
                    <Input
                        iconPosition='left'
                        icon={
                            observablepropertyform.definitionValidated === true
                                && observablepropertyform.definitionValid === true?
                            'check': 'delete'
                        }
                        loading={observablepropertyform.validatingDefinition}
                        id="observablePropertyFormDefinition"
                        placeholder='Observable property identifier'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={observablepropertyform.data.definition}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        observablepropertyform.definitionValidated
                            && !observablepropertyform.definitionValid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Observable property already exists
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
                        id="observablePropertyFormDescription"
                        placeholder='Describe this observable property'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={observablepropertyform.data.description}/>
                </Form.Field>
                <Container>
                    <Button
                        primary
                        disabled={!observablepropertyform.valid}
                        loading={observablepropertyform.saving}
                        onClick={e => {
                            createObservableProperty(
                                observablepropertyform.data
                            );
                        }}>
                        Add
                    </Button>
                </Container>
            </Form>
        )
    }
};

export default ObservablePropertyFormComponent;
