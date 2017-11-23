import React, { Component } from 'react';

// Semantic UI components
import {
    Form,
    Input,
    Label,
    Icon,
    Button,
    Container
} from 'semantic-ui-react';


class HumanFormComponent extends Component {

    constructor(props) {
        super(props);
        this.checkname = false;
    }

    handleChange(event) {
        let text = null;
        switch (event.target.id) {
            case "humanformName":
                text = event.target.value;
                this.props.setHumanUsername(text);
                if(this.checkname){
                    clearTimeout(this.checkname);
                    this.checkname = false;
                }
                if(text.length > 0){
                    this.checkname = setTimeout(function(){
                        if(this.props.humanform.data.username.length > 0){
                            this.props.checkHumanUsername(
                                this.props.humanform.data.username);
                        }
                    }.bind(this), 1000);
                }
                break;
            case "humanformFirstname":
                text = event.target.value;
                this.props.setHumanFirstname(text);
                break;
            case "humanformLastname":
                text = event.target.value;
                this.props.setHumanLastname(text);
                break;
            case "humanformOrg":
                text = event.target.value;
                this.props.setHumanOrganization(text);
                break;
            case "humanformPosition":
                text = event.target.value;
                this.props.setHumanPositon(text);
                break;
            case "humanformRole":
                text = event.target.value;
                this.props.setHumanRole(text);
                break;

            default:
        }
    }

    render() {
        const {
            humanform,
            createHuman
        } = this.props;
        return (
            <Form>
                <Form.Field required>
                    <label>Username</label>
                    <Input
                        iconPosition='left'
                        icon={
                            humanform.usernameValidated === true
                                && humanform.valid === true?
                            'check': 'delete'
                        }
                        loading={humanform.validatingUsername}
                        id="humanformName"
                        placeholder='Assign this person a username'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={humanform.data.username}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                    {
                        humanform.usernameValidated && !humanform.valid?
                        <Label
                            basic
                            color='red'
                            pointing>
                            <Icon name='warning sign' />
                            Username already registered
                        </Label>: null
                    }
                </Form.Field>
                <Form.Field required>
                    <label>Firstname</label>
                    <Input
                        id="humanformFirstname"
                        placeholder='First name'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={humanform.data.firstname}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>
                <Form.Field required>
                    <label>Lastname</label>
                    <Input
                        id="humanformLastname"
                        placeholder='Lastname'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={humanform.data.lastname}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>
                <Form.Field required>
                    <label>Organisation</label>
                    <Input
                        id="humanformOrg"
                        placeholder='Organisation'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={humanform.data.organisation}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>
                <Form.Field required>
                    <label>Position</label>
                    <Input
                        id="humanformPosition"
                        placeholder='Position'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={humanform.data.position}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>
                <Form.Field required>
                    <label>Role</label>
                    <Input
                        id="humanformRole"
                        placeholder='Role'
                        onChange={
                            this.handleChange.bind(this)
                        }
                        value={humanform.data.role}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"/>
                </Form.Field>
                <Container>
                    <Button
                        primary
                        disabled={!humanform.valid}
                        loading={humanform.saving}
                        onClick={e => {
                            createHuman(
                                humanform.data
                            );
                        }}>
                        Add
                    </Button>
                </Container>
            </Form>
        )
    }
};

export default HumanFormComponent;
