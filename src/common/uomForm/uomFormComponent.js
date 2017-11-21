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


class UomFormComponent extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
    }

    handleChange(event) {
        switch (event.target.id) {
            case "uomformName":
                let name = event.target.value;
                this.props.setUomName(name);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(name.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.uomform.data.name.length > 0){
                            this.props.checkUomName(
                                this.props.uomform.data.name);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "uomformDescription":
                let sn = event.target.value;
                this.props.setUomDescription(sn);
                break;
            default:
        }
    }

    render() {
        const {
            uomform,
            createUom
        } = this.props;
        return (
            <Form>
                <Form.Field required>
                    <label>Unit of measure code</label>
                    <Input
                        iconPosition='left'
                        icon={
                            uomform.validated === true && uomform.valid === true?
                            'check': 'delete'
                        }
                        loading={uomform.validatingName}
                        id="uomformName"
                        placeholder='Observable property identifier'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={uomform.data.name}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        uomform.validated && !uomform.valid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Unit of measure code already registered
                        </Label>: null
                    }
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <TextArea
                        id="uomformDescription"
                        placeholder='Describe this observable property'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={uomform.data.description}/>
                </Form.Field>
                <Container>
                    <Button
                        primary
                        disabled={!uomform.valid}
                        loading={uomform.saving}
                        onClick={e => {
                            createUom(
                                uomform.data
                            );
                        }}>
                        Add
                    </Button>
                </Container>
            </Form>
        )
    }
};

export default UomFormComponent;
