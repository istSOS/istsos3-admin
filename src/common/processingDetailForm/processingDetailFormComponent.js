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
} from 'semantic-ui-react';


class ProcessingDetailFormComponent extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
        this.checkidentifier = false;
    }

    handleChange(event) {
        switch (event.target.id) {
            case "processingDetailFormName":
                let name = event.target.value;
                this.props.setProcessingDetailName(name);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(name.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.processingdetailform.data.name.length > 0){
                            this.props.checkProcessingDetailName(
                                this.props.processingdetailform.data.name);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "processingDetailFormIdentifier":
                let def = event.target.value.replace(/[^\w:-]\./gi, '');
                this.props.setProcessingDetailIdentifier(def);
                if(this.checkidentifier){
                    clearTimeout(this.checkidentifier);
                    this.checkidentifier = false;
                }
                if(def.length > 0){
                    this.checkidentifier = setTimeout(function(){
                        if(this.props.processingdetailform.data.identifier.length > 0){
                            this.props.checkProcessingDetailIdentifier(
                                this.props.processingdetailform.data.identifier);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "processingDetailFormDescription":
                this.props.setProcessingDetailDescription(
                    event.target.value
                );
                break;
            default:
        }
    }

    render() {
        const {
            processingdetailform,
            createProcessingDetail
        } = this.props;
        return (
            <Form>
                <Form.Field required>
                    <label>Name</label>
                    <Input
                        iconPosition='left'
                        icon={
                            processingdetailform.nameValidated === true
                                && processingdetailform.nameValid === true?
                            'check': 'delete'
                        }
                        loading={processingdetailform.validatingName}
                        id="processingDetailFormName"
                        placeholder='Give this observable property a name'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={processingdetailform.data.name}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        processingdetailform.nameValidated
                            && !processingdetailform.nameValid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Processing detail name already assigned
                        </Label>: null
                    }
                </Form.Field>
                <Form.Field required>
                    <label>Identifier</label>
                    <Input
                        iconPosition='left'
                        icon={
                            processingdetailform.identifierValidated === true
                                && processingdetailform.identifierValid === true?
                            'check': 'delete'
                        }
                        loading={processingdetailform.validatingIdentifier}
                        id="processingDetailFormIdentifier"
                        placeholder='Observable property identifier'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={processingdetailform.data.identifier}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        processingdetailform.identifierValidated
                            && !processingdetailform.identifierValid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Processing detail already exists
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
                        id="processingDetailFormDescription"
                        placeholder='Describe this observable property'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={processingdetailform.data.description}/>
                </Form.Field>
                <Container>
                    <Button
                        primary
                        disabled={!processingdetailform.valid}
                        loading={processingdetailform.saving}
                        onClick={e => {
                            createProcessingDetail(
                                processingdetailform.data
                            );
                        }}>
                        Add
                    </Button>
                </Container>
            </Form>
        )
    }
};

export default ProcessingDetailFormComponent;
